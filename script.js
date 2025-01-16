
    <script>
        // JavaScript
        document.addEventListener("DOMContentLoaded", () => {
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

            const interval = setInterval(draw, 50);

            // Stop the Matrix effect and show the portfolio after 5 seconds
            setTimeout(() => {
                clearInterval(interval);
                document.getElementById('matrix-intro').style.display = 'none';
                document.getElementById('portfolio-content').style.display = 'block';
            }, 5000);
        });

        // Handle tab switching with visibility change
        document.addEventListener("visibilitychange", () => {
            const introDiv = document.getElementById('matrix-intro');
            const portfolioContent = document.getElementById('portfolio-content');

            if (document.hidden) {
                introDiv.style.display = 'flex';
                portfolioContent.style.display = 'none';

                const canvas = document.getElementById('matrix');
                const ctx = canvas.getContext('2d');
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

                const interval = setInterval(draw, 50);

                // Stop Matrix effect after 3 seconds when tab becomes active again
                setTimeout(() => {
                    clearInterval(interval);
                    introDiv.style.display = 'none';
                    portfolioContent.style.display = 'block';
                }, 3000);
            }
        });
    </script>
