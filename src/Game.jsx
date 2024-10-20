import {useState} from "react";
import {InformationLayout} from "./GameLayout/Information/InformationLayout.jsx";
import {Field} from "./GameLayout/Field/FieldLayout.jsx";
import './Game.css'
import {GameLayout} from "./GameLayout.jsx";

export const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(['', '', '', '', '', '', '', '', '',])
    const winnerSchema = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const togglePlayer = () => {
        setCurrentPlayer((player) => (player === 'X' ? '0' : 'X'));
    };

    const onClicked = (index) => {
        setField(field => {
            const newField = [...field];
            newField[index] = currentPlayer;

            for (let i = 0; i < winnerSchema.length; i++) {
                let [x, y, z] = winnerSchema[i];
                if (newField[x] && newField[x] === newField[y] && newField[x] === newField[z]) {
                    setIsGameEnded(true);
                    return newField
                }
            }

            if (!newField.includes('')) {
                setIsDraw(true);
                setIsGameEnded(true)
            }
            togglePlayer()
            return newField;
        })
    }

    const restart = () => {
        setField(['', '', '', '', '', '', '', '', '',]);
        setIsGameEnded(false);
        setIsDraw(false);
        setCurrentPlayer('X')
    }

    return (<>
        <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>
        <Field field={field} isGameEnded={isGameEnded} onClick={onClicked}/>
        <GameLayout field={field} isGameEnded={isGameEnded} isDraw={isDraw} togglePlayer={togglePlayer}
                    restart={restart}/>
    </>)
}