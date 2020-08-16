function ticTakToeGame() {

    const g_allCells = document.getElementsByTagName('td');
    const g_buttonClear = document.getElementById('button_clear');
    const g_userTurn = document.querySelector('.user-turn');
    const g_spinner = document.querySelector('.spinner');
    const g_winning_text = document.querySelector('#winning_text');

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

        if (isWinner('X')) {
            /** add some text */
            return
        }

        if (isGameOver())
            return;

        toggleUserAndComputerTurn();
        setTimeout(() => { computerTurn() }, 1500);
    }

    /**
     * Removes the class ocupied and the innerHTML from all cells.
     */
    function onClickClearButton() {
        for (const cell of g_allCells) {
            cell.innerHTML = '';
            cell.classList.remove('ocupied');
        }
        g_winning_text.innerText = "";
        g_winning_text.style.display = "none";
        g_userTurn.style.display = "block";

    }

    /**
     * Replaces the text shows whose turn.
     */
    function toggleUserAndComputerTurn() {
        g_userTurn.style.display = g_userTurn.style.display === 'none' ? 'block' : 'none';
        g_spinner.style.display = g_spinner.style.display === 'block' ? 'none' : 'block';
    }

    /**
     * Check if sameone win.
     */
    function isWinner(player) {
        const optionsForWins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < 8; i++) {
            const options = optionsForWins[i];
            if (
                g_allCells[options[0]].innerHTML == player &&
                g_allCells[options[1]].innerHTML == player &&
                g_allCells[options[2]].innerHTML == player
            ) {
                let winner = player === 'X'? 'you!': 'the computer :('
                g_winning_text.innerText = "The winner is " + winner;
                g_winning_text.style.display = "block";
                g_userTurn.style.display = "none";
                g_spinner.style.display = "none";
                return true;
            }
        }

    }

    /**
     * Checks if the game is over.
     */
    function isGameOver() {
        for (const cell of g_allCells) {
            if (cell.innerHTML === '') {
                return false;
            }
        }
        g_winning_text.innerText = "DRAW";
        g_winning_text.style.display = "block";
        g_userTurn.style.display = "none";
        g_spinner.style.display = "none";
        return true;
    }

    /**
     * Make the computer turn.
     */
    function computerTurn() {

        const optionsForWins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        /** Try to win */
        for (let i = 0; i < 8; i++) {
            const options = optionsForWins[i];
            const o_1 = g_allCells[options[0]].innerHTML;
            const o_2 = g_allCells[options[1]].innerHTML;
            const o_3 = g_allCells[options[2]].innerHTML;

            if (o_1 === 'O' && o_2 === 'O' && o_3 == '') {
                addComputerSign(g_allCells[options[2]]);
                return;
            }

            if (o_2 === 'O' && o_3 === 'O' && o_1 == '') {
                addComputerSign(g_allCells[options[0]]);
                return;
            }

            if (o_3 === 'O' && o_1 === 'O' && o_2 == '') {
                addComputerSign(g_allCells[options[1]]);
                return;
            }
        }

        /** Avoid loss */
        for (let i = 0; i < 8; i++) {
            const options = optionsForWins[i];
            const o_1 = g_allCells[options[0]].innerHTML;
            const o_2 = g_allCells[options[1]].innerHTML;
            const o_3 = g_allCells[options[2]].innerHTML;

            if (o_1 === 'X' && o_2 === 'X' && o_3 == '') {
                addComputerSign(g_allCells[options[2]]);
                return;
            }

            if (o_2 === 'X' && o_3 === 'X' && o_1 == '') {
                addComputerSign(g_allCells[options[0]]);
                return;
            }

            if (o_3 === 'X' && o_1 === 'X' && o_2 == '') {
                addComputerSign(g_allCells[options[1]]);
                return;
            }
        }

        /** Increases chances of winning */
        for (let i = 0; i < 8; i++) {
            const options = optionsForWins[i];
            const o_1 = g_allCells[options[0]].innerHTML;
            const o_2 = g_allCells[options[1]].innerHTML;
            const o_3 = g_allCells[options[2]].innerHTML;

            if (o_1 === 'O' && o_2 != 'X' && o_3 == '') {
                addComputerSign(g_allCells[options[2]]);
                return;
            }

            if (o_2 === 'O' && o_3 != 'X' && o_1 == '') {
                addComputerSign(g_allCells[options[0]]);
                return;
            }

            if (o_3 === 'O' && o_1 != 'X' && o_2 == '') {
                addComputerSign(g_allCells[options[1]]);
                return;
            }
        }

        /** Select an initial step */
        for (let i = 0; i < 8; i++) {
            const options = optionsForWins[i];
            const o_1 = g_allCells[options[0]].innerHTML;
            const o_2 = g_allCells[options[1]].innerHTML;
            const o_3 = g_allCells[options[2]].innerHTML;
            if (o_1 === '' && o_2 === '' && o_3 == '') {
                addComputerSign(g_allCells[options[Math.floor(Math.random() * 3)]]);
                return;
            }
        }

        /** Step does not matter */
        for (let i = 0; i < 9; i++) {
            if (g_allCells[i].innerHTML === '') {
                addComputerSign(g_allCells[i]);
                return;
            }
        }
    }

    /** Set 'O' on the recived cell */
    function addComputerSign(cell) {
        cell.innerHTML = 'O';
        cell.classList.add('ocupied');
        if (isWinner('O'))
            return;
        toggleUserAndComputerTurn();
        return;
    }

    /**
     * Init all the events.
     */
    function initEvents() {
        for (const cell of g_allCells) {
            cell.addEventListener('click', onClickCell);
        }
        g_buttonClear.addEventListener('click', onClickClearButton);
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

