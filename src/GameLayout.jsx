import PropTypes from "prop-types";

export function GameLayout({restart, togglePlayer, isDraw, isGameEnded, field}) {
    return (
        <div className="container">
            <button className="btn-restart" onClick={restart}>Начать заново
            </button>
            <button className="btn-restart btn-color" disabled={isDraw || isGameEnded || field.some((param) => param !== '') ?  true : null} onClick={togglePlayer}>Сменить игрока
            </button>
        </div>)
}
GameLayout.propTypes = {
    restart: PropTypes.func.isRequired,
    togglePlayer: PropTypes.func.isRequired,
    isDraw: PropTypes.bool,
    isGameEnded: PropTypes.bool,
    field: PropTypes.arrayOf(PropTypes.string),
}