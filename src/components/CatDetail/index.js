import React from "react";

const CatDetail = (props) => {
    return (
        <div>
            {props.cards.map(card => (
                <>
                    <h2>{card.name}</h2>
                    <p>{card.detail}</p>
                </>
            ))}
        </div>
    )
};

export default CatDetail;