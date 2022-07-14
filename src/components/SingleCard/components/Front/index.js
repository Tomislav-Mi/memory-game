import React from "react";

const Front = (props) => {
    const card = props.card;

    return (
    <img className="front" src={card.src} alt="card front" />
    )
};

export default Front;