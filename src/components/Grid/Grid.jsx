import { useCallback, useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helpers/checkWinner"
import "./Grid.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Grid = ({ numberOfCards }) => {
    const [turn, setTurn] = useState(true); // X->false, O->true
    const [board, setBoard] = useState(Array(numberOfCards).fill(""))
    const [winner, setWinner] = useState(null);

    const Play=useCallback( function PlayCallback(index) {
        console.log("moved player", index);
        if (turn == true) {
            board[index] = 'O';
        } else {
            board[index] = 'X'
        }

        const win = isWinner(board, turn ? 'O' : 'X');

        if (win) {
            setWinner(win);
            toast.success(`Congratulation ${win} won the game!`)
        }

        setBoard([...board]);
        setTurn(!turn);
    },[turn]);

    function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return (
        <div className="grid-wrapper">
                    <ToastContainer position="top-center" />
            {winner && (
                <>
                    <h1 className="high-light">Winner is {winner} </h1>
                    <button className="reset" onClick={reset}>Reset Game</button>
                </>
            )}
            <h1 className="high-light">Current Turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((value, idx) => {
                    return <Card gameEnd={winner?true:false} onPlay={Play} player={value} key={idx} index={idx} />
                })}
            </div>
        </div>
    )
}

export default Grid;