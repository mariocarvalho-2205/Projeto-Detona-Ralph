/*
// Gerenciamento de variaveis
separamos em um objeto as variaveis por tipos que mudadm algumacoisa na tela
das que rodam calculos por baixo dos panos
views e values

*/

const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelectorAll('.enemy'),
        timeLeft: document.querySelectorAll('#time-left'),
        score: document.querySelector('#score') 
    },
    values: {
        timerId: null,
        gameVelocit: 1000,
    }
};

function randomSquare () {
    
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];

    randomSquare.classList.add('enemy')
}

function moveEnemy () {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocit)
}

function addListenerHitBox () {
    state.view.squares.forEach((square) => {
         
    })

}

function initialize () {
    moveEnemy()
}


initialize()