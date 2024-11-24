document.addEventListener('DOMContentLoaded', () => {
    // Variables for quiz functionality
    const timerDisplay = document.getElementById('time');
    const submitButton = document.getElementById('submit');
    const resultsDiv = document.getElementById('results');
    const scoreDisplay = document.getElementById('score');
    const restartButton = document.getElementById('restart');
    let timeLeft = 120 * 60; // 120 minutes in seconds

    // Correct answers
    const correctAnswers = {
        q1: "8", // Correct answer for question 1
        q2: "4"  // Correct answer for question 2
    };

    // Timer function
    const countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up! Submitting your answers.");
            submitButton.click(); // Simulate click for submission
        }
        timeLeft--;
    }, 1000);

    // Submit button event listener
    submitButton.addEventListener('click', () => {
        clearInterval(countdown);
        let score = 0;

        // Check answers
        const answer1 = document.getElementById('q1').value.trim();
        const answer2 = document.getElementById('q2').value.trim();

        if (answer1 === correctAnswers.q1) score++;
        if (answer2 === correctAnswers.q2) score++;

        // Display results
        scoreDisplay.textContent = You scored: ${score} out of ${Object.keys(correctAnswers).length};
        resultsDiv.style.display = 'block';
        document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    });

    // Restart button event listener
    restartButton.addEventListener('click', () => {
        resultsDiv.style.display = 'none';
        document.getElementById('quiz').style.display = 'block'; // Show the quiz again
        document.getElementById('q1').value = '';
        document.getElementById('q2').value = '';
        timeLeft = 120 * 60; // Reset time
        countdown; // Restart the timer
    });
});