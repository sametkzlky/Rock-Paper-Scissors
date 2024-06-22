let userScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['tas', 'kagıt', 'makas'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const computerChoiceImg = `./image/${computerChoice}.jpg`; 

    let result;

    if (playerChoice === computerChoice) {
        result = "Berabere!";
    } else if (
        (playerChoice === 'tas' && computerChoice === 'makas') ||
        (playerChoice === 'kagıt' && computerChoice === 'tas') ||
        (playerChoice === 'makas' && computerChoice === 'kagıt')
    ) {
        result = "Kazandınız!";
        userScore++;
        document.getElementById('score').innerText = userScore;
    } else {
        result = "Kaybettiniz!";
        computerScore++;
        document.getElementById('scorePc').innerText = computerScore;
    }

    document.getElementById('result').innerHTML = `<img class="choice-img" src="${computerChoiceImg}" alt="${computerChoice}"> <br> ${result}`;
}