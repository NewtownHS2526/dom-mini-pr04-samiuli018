console.log("Script Running");
console.log("Script Running");

// Helper function to move a penguin forward
function movePenguin(penguin, position) {
  if (position <= 6) {
    penguin.style.gridColumn = position;  // Move penguin by adjusting its column position
  }
}

// Position variables for each penguin (starting from column 1)
let tuxPosition = 1;
let daisyPosition = 1;
let rockyPosition = 1;

// Query selectors for all buttons and penguins
const tux = document.querySelector("#tux");
const daisy = document.querySelector("#daisy");
const rocky = document.querySelector("#rocky");

const tuxButton = document.querySelector("#tuxButton");
const daisyButton = document.querySelector("#daisyButton");
const rockyButton = document.querySelector("#rockyButton");

const resultMessage = document.querySelector("#result");

// Function to move Tux forward
function moveTux() {
  if (tuxPosition <= 6) {
    tuxPosition++;  // Increase Tux's position
    movePenguin(tux, tuxPosition);  // Update Tux's position on the grid
    checkWinner("Tux");  // Check if Tux has won
  }
}

// Function to move Daisy forward
function moveDaisy() {
  if (daisyPosition <= 6) {
    daisyPosition++;  // Increase Daisy's position
    movePenguin(daisy, daisyPosition);  // Update Daisy's position on the grid
    checkWinner("Daisy");  // Check if Daisy has won
  }
}

// Function to move Rocky forward
function moveRocky() {
  if (rockyPosition <= 6) {
    rockyPosition++;  // Increase Rocky's position
    movePenguin(rocky, rockyPosition);  // Update Rocky's position on the grid
    checkWinner("Rocky");  // Check if Rocky has won
  }
}

// Function to check if any penguin reached column 6
function checkWinner(winner) {
  if (tuxPosition === 6) {
    resultMessage.textContent = "Tux got the fish! 🐟";
    disableButtons();
  } else if (daisyPosition === 6) {
    resultMessage.textContent = "Daisy got the fish! 🐟";
    disableButtons();
  } else if (rockyPosition === 6) {
    resultMessage.textContent = "Rocky got the fish! 🐟";
    disableButtons();
  }
}

// Function to disable all buttons once there's a winner
function disableButtons() {
  tuxButton.disabled = true;
  daisyButton.disabled = true;
  rockyButton.disabled = true;
}

// Add event listeners for each button
tuxButton.addEventListener("click", moveTux);
daisyButton.addEventListener("click", moveDaisy);
rockyButton.addEventListener("click", moveRocky);


