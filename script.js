const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scoresDiv = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value;
  const score = parseInt(scoreInput.value);

  if (name && !isNaN(score)) {
    let highScores = getHighScores();
    highScores.push({ name: name, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    nameInput.value = "";
    scoreInput.value = "";
    showScores();
  } else {
    alert("Please enter a valid name and score.");
  }
}

// Get high scores from Local Storage
function getHighScores() {
  let highScores = localStorage.getItem("highScores");
  if (highScores) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
}

// Show scores in div
function showScores() {
  const highScores = getHighScores();
  if (highScores.length > 0) {
    scoresDiv.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          ${highScores.map(score => `
            <tr>
              <td>${score.name}</td>
              <td>${score.score}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else {
    scoresDiv.innerHTML = "No scores yet";
  }
}