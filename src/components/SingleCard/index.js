import React from "react";

import Back from "./components/Back";
import Front from "./components/Front";
import CardUI from "../UI/CardUI";

import "./SingleCard.css";


const SingleCard = (props) => {
    const {
        flipped,
        card,
        choiceHandler,
        disabled,
    } = props;

    const backClickHandler = () => {
        if (!disabled) {
            choiceHandler(card);
        }
    };

    return (
        <CardUI>
            <div className={flipped && "flipped"}>
                <Front card={card}/>
                <Back onClick={backClickHandler}/>
            </div>
        </CardUI>
    );

};
export default SingleCard;