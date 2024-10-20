import styles from "./field.module.css";
import PropTypes from "prop-types";

export const Field = ({field, onClick, isGameEnded}) => {
    return (
        <div className="canvas">
            <ul className={styles.grid}>
                {field.map((item, index) => (
                    <li key={index}>
                        <button className={styles.btn} disabled={field[index] || isGameEnded ? true : null} onClick={() => onClick(index)}>{item}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Field.propTypes = {
    field: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    isGameEnded: PropTypes.bool
}