import React from "react";

import SingleCard from "../SingleCard";
import "./PlayingSurface.css";

const PlayingSurface = (props) => {
    const {
        cards,
        choiceOne,
        choiceTwo,
        choiceHandler,
        disabled,
    } = props;

    return (
        <div className="card-grid">
            {cards.map(card => (
                <SingleCard
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    card={card}
                    choiceHandler={choiceHandler}
                    disabled={disabled}
                    key={card.id}
                />
            ))}
        </div>
    );
};


export default PlayingSurface;