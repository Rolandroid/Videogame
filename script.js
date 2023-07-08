// obten el contexto de renredizado 2D del lienzo
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Variables del juego
let playerX = 0;
let playerY = 350;
let playerSpeedX = 0;
let playerSpeedY = 0;
const gravity = 0.5;
const jumForce = -10;
let isJumping = false;
let bullets = [];

// Funcion de actualisación del juego
function updateGame(){
    // Borra el lienzo
    context.clearRect(0, 0, canvas.clientWidth, canvas.height);

    // Dibujar al jugador
    context.fillRect(playerX, playerY, 50, 50);

    // Dibujar las balas
    bullets.forEach(bullet=>{
        bullet.x += bullet.speedX;
        context.fillReact(bullet.x, bullet.y, 10, 5);
    });

    // Actualiza la posición del jugador
    playerX += playerSpeedX;
    playerY += playerSpeedY;

    // Aplicar la gravedadd al jugador
    playerSpeedY+= gravity;

    // Control del salto
    if(isJumping && playerY >= canvas.height - 50){
        playerSpeedY = JumpForce
        isJumping = false
    }

    // Limitar al jugador dentro del lienzo

    if(playerY >= canvas.height - 50) {
        playerY = canvas.height - 50;
        playerSpeedY = 0;
    }
    // Solicita la proxima animacion
    requestAnimationFrame(updateGame)
}


//control de entrada del teclado
document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        playerSpeedX = 5;
    }
    else if(event.key === "ArrowLeft"){
        playerSpeedX = -5;
    }
    else if (event.key === "arrowUp" && !isJumping) {
        playerSpeedY = JumpForce;
        isJumping = true;
    }
    else if (event.key === "f") {
        fireBullet()
    }
});

document.addEventListener("keyup",function(event){
    if("ArrowRight" || event.key === "ArrowLeft"){
        playerSpeed = 0
    }
});

// Función para disparar una bala

function fireBullet(){
    const bullet = {
        x: playerX + 50,
        y: playerY + 25,
        speedX: 8
    }
    bullet.push(bullets);
};

// Inicia el juego

updateGame();