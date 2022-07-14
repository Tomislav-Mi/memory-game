import React from "react";
import Front from "../../components/SingleCard/components/Front";


import "./Cats.css"


const Cats = (props) => {
    const {
        cards,
    } = props;

    return (
        <div className="cats-column">
            {cards.map(card => (
                <div className="container">
                    <div className="text">
                        <h2>{card.name}</h2>
                        <Front
                            className="image"
                            card={card}
                            key={card.id}
                        >
                        </Front>
                        <p>{card.detail}</p>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default Cats;