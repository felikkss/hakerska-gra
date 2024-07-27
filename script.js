document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game');
    const target = document.getElementById('target');
    const startButton = document.getElementById('start-button');
    const message = document.getElementById('message');
    
    let gameInterval;
    let gameDuration = 5000; // czas gry w milisekundach

    startButton.addEventListener('click', startGame);

    function startGame() {
        message.textContent = '';
        target.style.display = 'block';
        moveTarget();
        gameInterval = setInterval(moveTarget, 500);
        setTimeout(endGame, gameDuration);
    }

    function moveTarget() {
        const x = Math.floor(Math.random() * (gameContainer.clientWidth - target.clientWidth));
        const y = Math.floor(Math.random() * (gameContainer.clientHeight - target.clientHeight));
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
    }

    target.addEventListener('click', () => {
        clearInterval(gameInterval);
        target.style.display = 'none';
        window.location.href = "https://www.youtube.com/watch?v=KL5FcdCmdgQ"; // link do wygranej
    });

    function endGame() {
        if (target.style.display !== 'none') {
            clearInterval(gameInterval);
            target.style.display = 'none';
            window.location.href = "https://www.youtube.com/watch?v=9sCuyYOo3tQ"; // link do przegranej
        }
    }
});
