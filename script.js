const allCells = document.getElementsByTagName('td');
const buttonClear = document.getElementById('button_clear');
const userTurn = document.querySelector('.user-turn');
const spinner = document.querySelector('.spinner');

for (const cell of allCells) {
    cell.addEventListener('click', function(){
        if(!cell.classList.contains('ocupied')){
            cell.innerHTML = 'X';
            cell.classList.add('ocupied');
            if (!isGameOver()) {
                userTurn.style.display = "none";
                spinner.style.display = "block";
                setTimeout(() => {
                    computerTurn();
                }, 1500);
            }
        }
    })
}

buttonClear.addEventListener('click', function(){
    for (const cell of allCells) {
        cell.innerHTML = '';
        cell.classList.remove('ocupied');
    }
})


function computerTurn() {
    for (const cell of allCells) {
        if (cell.innerHTML === '') {
            cell.innerHTML = 'O';
            cell.classList.add('ocupied');
            spinner.style.display = "none";
            userTurn.style.display = "block";
            return;
        }
    }
}

function isGameOver() {
    for (const cell of allCells) {
        if (cell.innerHTML === '') {
            return false;
        }
    }
    return true;
}
