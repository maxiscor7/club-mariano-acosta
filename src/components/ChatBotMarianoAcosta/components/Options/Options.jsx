import React from "react";
import "./Options.css";

export default function Options(props) {

    const futbolInfMasc = () => {
        props.actions.futbolInfMasc();
    }
    const secondAction = () => {
        props.actions.secondAction();
    }

    return (
        <div className="options-container">
            <button onClick={() => futbolInfMasc()}>Futbol Infantil masculino</button>
            <button onClick={() => secondAction()}>Futbol Infantil, adolescentes y mayores Femenino</button>
        </div>
    )
};

