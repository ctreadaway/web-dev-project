function submitQuiz() {
    // Get user answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.getElementById('q4').value.trim().toLowerCase();
    const q5 = document.querySelectorAll('input[name="q5"]:checked');
    
    let score = 0;

    // Question 1: Atlanta Hawks
    if (q1 && q1.value === "A") {
        score++;
    }

    // Question 2: Falcons player
    if (q2 && q2.value === "B") {
        score++;
    }

    // Question 3: Braves World Series year
    if (q3 && q3.value === "C") {
        score++;
    }

    // Question 4: Braves league
    if (q4 === "fishing") {
        score++;
    }

    // Question 5: Multiple answers (Hawks, Falcons, Braves)
    let q5CorrectAnswers = ["A", "B", "D"]; // Correct answers for Q5
    let q5Score = 0;

    q5.forEach((checkbox) => {
        if (q5CorrectAnswers.includes(checkbox.value)) {
            q5Score++;
        }
    });

    // Make sure the user selected exactly 3 answers (Hawks, Falcons, Braves) and only those
    if (q5Score === 3 && q5.length === 3) {
        score++;
    }

    // Display the score
    document.getElementById('score').textContent = `Your score is ${score} out of 5.`;
    
    // Pass/Fail result
    if (score === 5) { // Pass if score is exactly 5
        document.getElementById('resultText').textContent = "You passed the quiz!";
    } else {
        document.getElementById('resultText').textContent = "You failed the quiz. Try again!";
    }

    // Show the result section
    document.getElementById('result').style.display = 'block';
}

function restartQuiz() {
    // Reset form and hide result
    document.getElementById('quizForm').reset();
    document.getElementById('result').style.display = 'none';
}
