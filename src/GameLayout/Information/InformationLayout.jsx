import './info.module.css';
import PropTypes from "prop-types";

export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => {
    return (<div className="info">
            {isDraw ? <div className="draw">
                <p>Ничья</p>
            </div> : !isDraw && isGameEnded ? <div className="next-step">
                <p>Победа: {`${currentPlayer}`}</p>
            </div> : !isDraw && !isGameEnded ? <div className="winner">
                <p>Ходит: {`${currentPlayer}`}</p>
            </div> : null}


        </div>)
}

InformationLayout.propTypes = {
    isDraw: PropTypes.bool,
    currentPlayer: PropTypes.string,
    isGameEnded: PropTypes.bool
}