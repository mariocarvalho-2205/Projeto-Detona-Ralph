/*
// Gerenciamento de variaveis
separamos em um objeto as variaveis por tipos que mudadm algumacoisa na tela
das que rodam calculos por baixo dos panos
views e values

*/
// objeto container para variaveis constantes

const state = {
    // view - variaveis de interface
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelectorAll('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
        life: document.querySelector('.menu-lives h2 span') 
    },
    // variaveis - para calculos ou backend
    values: {
        gameVelocit: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 10,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimeId: setInterval(countDown, 1000),

    }
};

function countDown () {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime
    
    if (state.values.currentTime <= 0) {
        // aqui zera os intervalos para continuar contando
        clearInterval(state.actions.countDownTimeId);
        clearInterval(state.actions.timerId);
        alert(`Game Over! Seu resultado foi: ` + state.values.result)
        state.view.life.textContent--
    }
}

function playSound(audioName) {
    let audio = new Audio(`../../src/audios/${audioName}.m4a`);
    audio.volume = 0.1;
    audio.play();
}

function randomSquare () {
    
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add('enemy')
    state.values.hitPosition = randomSquare.id
}


function addListenerHitBox () {
    state.view.squares.forEach((square) => {
         square.addEventListener('mousedown', () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit")
            }
         })
    })

}

function initialize () {

    addListenerHitBox()
}
console.log(state.view.life)

initialize()