// Obtén el contexto de renderizado 2D del lienzo
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Variables del juego
let playerX = 0;
let playerY = 350;
let playerSpeedX = 0;
let playerSpeedY = 0;
const gravity = 0.5;
const jumpForce = -10;
let isJumping = false;
let bullets = [];

// Función de actualización del juego
function updateGame() {
    // Borra el lienzo
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja al jugador
    context.fillRect(playerX, playerY, 50, 50);

    // Dibuja las balas
    bullets.forEach(bullet => {
        bullet.x += bullet.speedX;
        context.fillRect(bullet.x, bullet.y, 10, 5);
    });

    // Actualiza la posición del jugador
    playerX += playerSpeedX;
    playerY += playerSpeedY;

    // Aplica la gravedad al jugador
    playerSpeedY += gravity;

    // Control del salto
    if (isJumping && playerY >= canvas.height - 50) {
        playerSpeedY = jumpForce;
        isJumping = false;
    }

    // Limita al jugador dentro del lienzo
    if (playerY >= canvas.height - 50) {
        playerY = canvas.height - 50;
        playerSpeedY = 0;
    }

    // Solicita la próxima animación
    requestAnimationFrame(updateGame);
}

// Control de entrada del teclado
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        playerSpeedX = 5;
    } else if (event.key === "ArrowLeft") {
        playerSpeedX = -5;
    } else if (event.key === "ArrowUp" && !isJumping) {
        playerSpeedY = jumpForce;
        isJumping = true;
    } else if (event.key === "f") {
        fireBullet();
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        playerSpeedX = 0;
    }
});

// Función para disparar una bala
function fireBullet() {
    const bullet = {
        x: playerX + 50,
        y: playerY + 25,
        speedX: 8
    };
    bullets.push(bullet);
}

// Inicia el juego
updateGame();
