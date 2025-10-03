const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let birdY = 150;
let gravity = 0.6;
let velocity = 0;
let jump = -10;

document.addEventListener("keydown", () => {
    velocity = jump;
});

function drawBird() {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(50, birdY, 15, 0, Math.PI * 2);
    ctx.fill();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    velocity += gravity;
    birdY += velocity;

    drawBird();

    if (birdY + 15 > canvas.height) {
        alert("Игра окончена!");
        birdY = 150;
        velocity = 0;
    }

    requestAnimationFrame(update);
}

update();
