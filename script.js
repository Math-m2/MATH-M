document.addEventListener('DOMContentLoaded', () => {
    // Registration Form Submission
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Registration successful for MATH-M!");
        });
    }

    // Quiz Timer and Submission
    const timerDisplay = document.getElementById('time');
    const submitButton = document.getElementById('submit');
    const resultsDiv = document.getElementById('results');
    const scoreDisplay = document.getElementById('score');
    let timeLeft = 7200; // 2 hours in seconds

    const correctAnswers = {
        q1: "8", // Correct answer for question 1
        q2: "4"  // Correct answer for question 2
    };

    if (submitButton) {
        const countdown = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')};

            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert("Time's up! Submitting your answers.");
                submitButton.click(); // Simulating click for submission
            }
            timeLeft--;
        }, 1000);

        submitButton.addEventListener('click', () => {
            clearInterval(countdown);
            let score = 0;

            // Check answers
            const answer1 = document.getElementById('q1').value;
            const answer2 = document.getElementById('q2').value;

            if (answer1 === correctAnswers.q1) score++;
            if (answer2 === correctAnswers.q2) score++;

            // Display results
            scoreDisplay.textContent = You scored: ${score} out of ${Object.keys(correctAnswers).length};
            resultsDiv.style.display = 'block';
            document.getElementById('quiz').style.display = 'none'; // Hide the quiz
        });
    }
});