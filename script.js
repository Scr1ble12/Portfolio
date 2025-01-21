// Function to initialize the Matrix effect
function startMatrixEffect() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 0);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = matrixCharacters.charAt(Math.floor(Math.random() * matrixCharacters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    return setInterval(draw, 50);
}

// Show the main portfolio after loading
document.addEventListener('DOMContentLoaded', () => {
    const interval = startMatrixEffect();

    // Simulate a loading period of 5 seconds
    setTimeout(() => {
        clearInterval(interval);
        document.getElementById('matrix-intro').style.display = 'none';
        document.getElementById('portfolio-content').style.display = 'block';
    }, 5000);
});

