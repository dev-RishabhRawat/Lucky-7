var dice1 = document.getElementById('dice1');
var dice2 = document.getElementById('dice2');
var bet = document.getElementById('betAmt');
var more = document.getElementById('more');
var equal = document.getElementById('equal');
var less = document.getElementById('less');
var submitAmt = document.getElementById('submit');
var div2 = document.getElementById('div2');
var hide = document.getElementById('hideButton');
var section = document.getElementById('section');
var footer = document.getElementById('footer');
var betArea = document.getElementById('betArea');
var intro = document.getElementById('intro');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var temp = document.getElementById('temp');
var msg = document.getElementById('output');
var won = document.getElementById('won');
var span = document.getElementById('span');
var unhideButton = document.getElementById('unhideButton');
var reset = document.getElementById('reset')
var selectedId, dice1Number, dice2Number, betValue, msg, clicked, h3, betAmount;
var winner, sum, score = 0;
function getScore() {

    if (temp.innerHTML === `Congrats! you won!! ${betAmount * 2} Rupees!`) {
        score = score + betAmount * 2;
        return score;
    }
    else if (temp.innerHTML === `Congrats! you won!! ${betAmount * 3} Rupees!`) {
        score = score + betAmount * 3;
        return score;
    }
    else {
        if (score > 0) {
            score = score - betAmount
            return score;
        }
        else {
            return 0;
        }
    }
}

var beep = new Audio();
beep.src = 'sound.mp3';
function playSound() {
    if (less.innerHTML === "less Than 7 Selected" || equal.innerHTML === "equal to 7 Selected" || more.innerHTML === "More Than 7 Selected") {
        beep.play();
    }
    else {
        console.log('unable to play sound');
    }

}
var count = temp.childElementCount;
bet.disabled = true;



button1.addEventListener('click', () => {
    bet.disabled = false;
    temp.innerHTML = "";
    more.innerHTML = "More Than 7 Selected";
    equal.innerHTML = '';
    less.innerHTML = '';


});
button2.addEventListener('click', () => {
    bet.disabled = false;
    temp.innerHTML = "";
    equal.innerHTML = "equal to 7 Selected";
    less.innerHTML = '';
    more.innerHTML = '';
});
button3.addEventListener('click', () => {
    temp.innerHTML = "";
    bet.disabled = false;
    less.innerHTML = "less Than 7 Selected";
    equal.innerHTML = '';
    more.innerHTML = '';
});


function betValue() {
    console.log(bet.value);
    return bet.value;
}



var rollDice = () => {
    betAmount = betValue();
    if (betAmount > 0) {
        if (msg.childElementCount > 1) {
            roll.disabled = true;
        }
        else {
            dice1.classList.add('effect1');
            dice2.classList.add('effect2');
            roll.disabled = false;
            dice1Number = Math.floor(Math.random() * 6 + 1);
            dice1value = `images/dice-${dice1Number}.JPEG`
            dice1.setAttribute('src', dice1value);
            dice2Number = Math.floor(Math.random() * 6 + 1);
            dice2value = `images/dice-${dice2Number}.JPEG`
            dice2.setAttribute('src', dice2value);

            bet.value = '';
            sum = (dice1Number + dice2Number);
            winner = whoWon();
            equal.innerHTML = '';
            less.innerHTML = '';
            more.innerHTML = '';
            roundScore = getScore();
            if (roundScore < 10) {
                span.innerHTML = `0${roundScore}`;
            }
            else {
                span.innerHTML = roundScore;
            }
            setTimeout(() => {
                dice1.classList.remove('effect1');
                dice2.classList.remove('effect2');
            }, 500)
        }

    }
    else {
        temp.innerHTML = "";
        h3 = document.createElement('h3');
        h3.textContent = "Enter Bet Amount First!!!! ";
        h3.setAttribute('id', 'betMsg');
        msg.appendChild(h3);
        setTimeout(() => {
            msg.removeChild(h3);
        }, 300);
    }
}

function hideGameRules() {
    div2.classList.add('hidden');
    hide.classList.add('hidden');
    intro.classList.add('hidden');
    section.classList.remove('block');
    footer.classList.remove('block');
    betArea.classList.remove('block');
    unhideButton.classList.remove('block');
    won.classList.remove('block');
    reset.classList.remove('block');
}
function unHideGameRules(){
    div2.classList.remove('hidden');
    hide.classList.remove('hidden');
    intro.classList.remove('hidden');
    section.classList.add('block');
    footer.classList.add('block');
    betArea.classList.add('block');
    unhideButton.classList.add('block');
    won.classList.add('block');
    reset.classList.add('block');
}
function reStart() {
    document.location.reload();
   
}

var roll = document.getElementById('roll');
roll.addEventListener('click', rollDice);

function whoWon() {
    if (more.innerHTML === "More Than 7 Selected" && sum > 7) {

        temp.innerHTML = `Congrats! you won!! ${betAmount * 2} Rupees!`;

    }


    else if (equal.innerHTML === "equal to 7 Selected" && sum == 7) {
        temp.innerHTML = `Congrats! you won!! ${betAmount * 3} Rupees!`;
    }
    else if (less.innerHTML === "less Than 7 Selected" && sum < 7) {
        temp.innerHTML = `Congrats! you won!! ${betAmount * 2} Rupees!`;
    }
    else {
        if (less.innerHTML === "less Than 7 Selected" || equal.innerHTML === "equal to 7 Selected" || more.innerHTML === "More Than 7 Selected") {
            temp.innerHTML = "";
            h3 = document.createElement('h3');
            h3.textContent = `Bette Luck Next Time! you lost ${betAmount} Rupees `;
            h3.setAttribute('id', 'betMsg');
            msg.appendChild(h3);
            setTimeout(() => {
                msg.removeChild(h3);
            }, 1000);
        }
        else {
            temp.innerHTML = `Please Select Playing condition First!!`;
        }

    }
}
