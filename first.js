let turn = "O";
let total_turn = 0;

let winner =  [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
let board_array = new Array(9).fill("E");
//  0.  1.  2.  3.  4.  5.  6.  7.  8.
// ["E","E","E","E","E","E","E","E","E"]


function checkWinner(){
    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1]&&board_array[index1]===board_array[index2]){
            return 1;
        }
    }
    return 0;
}
function updateZoom(winner = null) {
    const playerOImg = document.getElementById("player1");
    const playerXImg = document.getElementById("player2");

    if (winner) {
        if (winner === "O") {
            playerOImg.classList.add("zoomed");
            playerXImg.classList.remove("zoomed");
        } else {
            playerXImg.classList.add("zoomed");
            playerOImg.classList.remove("zoomed");
        }
    } else {
        if (turn === "O") {
            playerOImg.classList.add("zoomed");
            playerXImg.classList.remove("zoomed");
        } else {
            playerXImg.classList.add("zoomed");
            playerOImg.classList.remove("zoomed");
        }
    }
}

const printer =(event)=>{
    const element = event.target;
    //if boardr is empty
    if(board_array[element.id]==="E"){
        total_turn++;
    if(turn == "O"){
        element.innerHTML = "O";
        board_array[element.id] = "O"; 
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML = "Winner is O";
            board.removeEventListener('click' , printer);
            updateZoom("O");
            return;
        }
        turn = "X";
        updateZoom();
    }
    else{
        element.innerHTML = "X";
        board_array[element.id] = "X"; 
        if(checkWinner()){
            document.getElementById('winningMessage').innerHTML = "Winner is X";
            board.removeEventListener('click' , printer);
            updateZoom("X");
            return;
        }
        turn = "O";
        updateZoom();

    }
    if(total_turn == 9){
        document.getElementById('winningMessage').innerHTML = "Match is Draw";
         board.removeEventListener('click' , printer);
    }
}
}


//print sahi se ho rha hai
const board = document.querySelector('.board');
board.addEventListener('click' , printer);


//button 
const restart = document.getElementById("restartButton");
restart.addEventListener('click', ()=>{
    const cell = document.getElementsByClassName('cell');

    Array.from(cell).forEach((value)=>{
        value.innerHTML = "";
    })

    turn = "O";
    total_turn = 0;
    board_array = new Array(9).fill("E");
    document.getElementById('winningMessage').innerHTML = "";
    board.addEventListener('click' , printer);

    document.getElementById("player1").classList.remove("zoomed");
    document.getElementById("player2").classList.remove("zoomed");
    updateZoom();
})