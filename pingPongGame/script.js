let btns = document.querySelectorAll('button');
for(let btn of btns){
    btns[0].id='player1Btn'
    btns[1].id='player2Btn'
    btns[2].id='resetBtn'
}
let player1= {
    score:0 ,
    updateScore (){
          this.score++;
    }
}
let player2= {
    score:0,
    updateScore (){
        this.score++;
  }
}
let playToChosen = 0; // Variable to store the selected value
let playTo = document.querySelector('#playTo');
// Event listener for selecting a value and hiding the dropdown
playTo.addEventListener('change', function () {
    let playToLabel = document.querySelector('#playToLabel')
    playToChosen = playTo.value; // Save the selected value
    playToChosen=Number(playToChosen)
    console.log('Play To chosen:', playToChosen); // Log the value
    playToLabel.remove()
    this.remove() // Hide the dropdown
});

let currentRound = 0;
let UpdateGameUI = function () {
    let to = document.querySelector('#to');
    let round = document.querySelector('#round');
    let winner = document.querySelector('#win');

    btns[0].addEventListener('click', function () {
        if (player1.score < playToChosen && currentRound < playToChosen) {
            player1.score++;
            currentRound++;
            round.textContent = `Round ${currentRound}`;
            to.textContent = `${player1.score} : ${player2.score}`;
            checkWinner();
        }
    });

    btns[1].addEventListener('click', function () {
        if (player2.score < playToChosen && currentRound < playToChosen) {
            player2.score++;
            currentRound++;
            round.textContent = `Round ${currentRound}`;
            to.textContent = `${player1.score} : ${player2.score}`;
            checkWinner();
        }
    });

    btns[2].addEventListener('click', function () {
        // Reset the game
        player1.score = 0;
        player2.score = 0;
        currentRound = 0;
        round.textContent = 'Round 0';
        to.textContent = `0 : 0`;
        winner.textContent = '';
    });

    // Winning Logic
    function checkWinner() {
        if (currentRound === playToChosen) {
            if (player1.score > player2.score) {
                winner.textContent = `Player 1 has Won with ${player1.score - player2.score} more points 🙌🎉`;
                btns[0].style.backgroundColor = 'Green';
                for (let btn of btns) {
                    btns[0].style.filter = 'blur(2px)'; // Apply a blur effect
                    btns[0].style.pointerEvents = 'none'; // Disable button clicks
                    btns[1].style.filter = 'blur(2px)'; // Apply a blur effect
                    btns[1].style.pointerEvents = 'none'; // Disable button clicks
                }
            } else if (player2.score > player1.score) {
                winner.textContent = `Player 2 has Won with ${player2.score - player1.score} more points 🙌🎉`;
                btns[1].style.backgroundColor = 'Green';
                for (let btn of btns) {
                    btns[0].style.filter = 'blur(2px)'; // Apply a blur effect
                    btns[0].style.pointerEvents = 'none'; // Disable button clicks
                    btns[1].style.filter = 'blur(2px)'; // Apply a blur effect
                    btns[1].style.pointerEvents = 'none'; // Disable button clicks
                }
            } else {
                winner.textContent = `It's a tie! 🤝`;
                for (let btn of btns) {
                    btns[0].style.filter = 'blur(2px)'; // Apply a blur effect
                    btns[0].style.pointerEvents = 'none'; // Disable button clicks
                    btns[1].style.filter = 'blur(2px)'; // Apply a blur effect
                    btns[1].style.pointerEvents = 'none'; // Disable button clicks
                }
            }
    
            // Disable and blur all buttons after the game ends
           
        }
    }
    
}
UpdateGameUI();
