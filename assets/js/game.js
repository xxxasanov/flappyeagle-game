const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Qush obyekt
let bird = {
    x: 50,
    y: 150,
    width: 30,
    height: 30,
    gravity: 1.5,
    lift: -20,
    velocity: 0
};

// Tugma bosilganda tepaga sakraydi
document.addEventListener("keydown", function() {
    bird.velocity = bird.lift;
});

// O‘yin sikli
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Qushni chizish
    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);

    // Fizika
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height > canvas.height) {
        bird.y = canvas.height - bird.height;
        bird.velocity = 0;
    }

    requestAnimationFrame(draw);
}

draw();
