function submitQuiz() {
    // Get user answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.getElementById('q3').value.trim().toLowerCase();
    const q4 = document.querySelectorAll('input[name="q4"]:checked');
    
    let score = 0;

    // Question 1: Atlanta Hawks
    if (q1 && q1.value === "A") {
        score++;
    }

    // Question 2: Falcons player
    if (q2 && q2.value === "B") {
        score++;
    }

    // Question 3: Braves league
    if (q3 === "MLB") {
        score++;
    }

    // Question 4: Multiple answers
    let q4Score = 0;
    q4.forEach((checkbox) => {
        if (checkbox.value === "A" || checkbox.value === "B" || checkbox.value === "D") {
            q4Score++;
        }
    });
    if (q4Score === 3) {
        score++;
    }

    // Display the score
    document.getElementById('score').textContent = `Your score is ${score} out of 4.`;
    
    // Pass/Fail result
    if (score >= 4) {
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
