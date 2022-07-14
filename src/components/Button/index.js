import React from "react";

const Button = (props) => {

    return (
        <button
            onClick={props.onNewGame}>New Game
        </button>
    );
};

export default Button;