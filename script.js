const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const resultDisplay = document.getElementById("result");

const generateRandom = () => Math.floor(Math.random() * 3) + 1;

rockBtn.addEventListener("click", () => {
  let randomNum = generateRandom();

  if (randomNum === 1) {
    renderDisplay("🪨", "🪨", "It's a tie! ", "Rock!");
  } else if (randomNum === 2) {
    renderDisplay("🪨", "📃", "You Lose 😱", "Paper!");
  } else if (randomNum === 3) {
    renderDisplay("🪨", "✂️", "You won!!! 🥳🥳", "Scissors");
  }
});

paperBtn.addEventListener("click", () => {
  let randomNum = generateRandom();

  if (randomNum === 1) {
    renderDisplay("📃", "🪨", "You won!!! 🥳🥳", "Rock!");
  } else if (randomNum === 2) {
    renderDisplay("📃", "📃", "It's a tie! ", "Paper!");
  } else if (randomNum === 3) {
    renderDisplay("📃", "✂️", "You Lose 😱", "Scissors");
  }
});

scissorBtn.addEventListener("click", () => {
  let randomNum = generateRandom();

  if (randomNum === 1) {
    renderDisplay("✂️", "🪨", "You Lose 😱", "Rock!");
  } else if (randomNum === 2) {
    renderDisplay("✂️", "📃", "You won!!! 🥳🥳", "Paper!");
  } else if (randomNum === 3) {
    renderDisplay("✂️", "✂️", "It's a tie! ", "Scissors!");
  }
});

function renderDisplay(your, randomNum, message, choice) {
  resultDisplay.innerHTML = `
  <p>
    <u>AI Choice:</u>
    </p>
    <div class="card">
    <center>
    <button>
    <p> ${randomNum}
    </p> ${choice}
    </button>
    </center>
    </div>

    <p>${your} vs ${randomNum}</p>
        <p>${message}</p>
    `;
}
