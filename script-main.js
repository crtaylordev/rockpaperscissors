const getComputerChoice = () => {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    }
  }

  const getPlayerChoice = (playerInput) => {
    playerInput = playerInput.toLowerCase(); 
    if (playerInput === 'rock'|| playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bomb') {
     return playerInput;
      } else {
        console.log('Error!');
      }
  }

  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return 'You lose! Scissors beat paper.';
        } else {
            return 'You win! Paper beats rock.';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else {
            return 'You win! Scissors beat paper.';
        }
    }
  }

  const playerSelection = 'scissors';
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
