function onClickCell(id) {
    const cell = document.getElementById(id);
    if(!cell.innerHTML != ''){
        cell.innerHTML = 'X';
        if (!isGameOver()) {
            const userTurn =  document.querySelector('.user-turn').style.display = "none";
            const spinner = document.querySelector('.spinner').style.display = "block";
            setTimeout(() => {
                computerTurn();
            }, 1500);
        }
    }
}

function onClearGame() {
    for (let i = 1; i < 10; i++) {
        const cell = document.getElementById(i);
        cell.innerHTML = '';
    }
    turn = 'X';
}

function computerTurn() {
    for (let i = 1; i < 10; i++) {
        const cell = document.getElementById(i);
        if (cell.innerHTML === '') {
            cell.innerHTML = 'O';
            const spinner = document.querySelector('.spinner').style.display = "none";
            const userTurn =  document.querySelector('.user-turn').style.display = "block";
            return;
        }
    }
}

function isGameOver() {
    for (let i = 1; i < 10; i++) {
        const cell = document.getElementById(i);
        if (cell.innerHTML === '') {
            return false;
        }
    }
    return true;
}