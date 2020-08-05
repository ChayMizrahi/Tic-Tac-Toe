function ticTakToeGame() {

    const g_allCells = document.getElementsByTagName('td');
    const g_buttonClear = document.getElementById('button_clear');
    const g_userTurn = document.querySelector('.user-turn');
    const g_spinner = document.querySelector('.spinner');

    /**
     * Adds the X add the class 'ocupied' to the cilcked cell.
     * @param {*} event 
     */
    function onClickCell(event) {
        const cell = event.target;
        const isOcupied = cell.classList.contains('ocupied');
        
        if (isOcupied)
            return;
       
        cell.innerHTML = 'X';
        cell.classList.add('ocupied');

        if (isGameOver())
            return;

        toggleUserAndComputerTurn();
        setTimeout(() => {computerTurn()},1500);
    }

    /**
     * Removes the class ocupied and the innerHTML from all cells.
     */
    function onClickCkearButton() {
        for (const cell of g_allCells) {
            cell.innerHTML = '';
            cell.classList.remove('ocupied');
        }
    }

    /**
     * Replaces the text shows whose turn.
     */
    function toggleUserAndComputerTurn() {
        g_userTurn.style.display = g_userTurn.style.display === 'none' ? 'block' : 'none';
        g_spinner.style.display = g_spinner.style.display === 'block' ? 'none' : 'block';
    }

    /**
     * Checks is the game is over.
     */
    function isGameOver() {
        for (const cell of g_allCells) {
            if (cell.innerHTML === '') {
                return false;
            }
        }
        return true;
    }

    /**
     * Make the computer turn.
     */
    function computerTurn() {
        for (const cell of g_allCells) {
            if (cell.innerHTML === '') {
                cell.innerHTML = 'O';
                cell.classList.add('ocupied');
                toggleUserAndComputerTurn();
                return;
            }
        }
    }

    /**
     * Init all the events.
     */
    function initEvents() {
        for (const cell of g_allCells) {
            cell.addEventListener('click', onClickCell);
        }
        g_buttonClear.addEventListener('click', onClickCkearButton);
    }

    /**
     * Init the game.
     */
    this.init = function () {
        initEvents();
    }

}

const objGame = new ticTakToeGame();
objGame.init();

