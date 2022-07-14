import React, {Fragment} from "react";

import Title from "../../components/Title";
import Button from "../../components/Button";
import PlayingSurface from "../../components/PlayingSurface";
import Counter from "../../components/Counter";

const Game = (props) => {
    const {
        shuffleCards,
        cards,
        card,
        choiceOne,
        choiceTwo,
        choiceHandler,
        disabled,
        turns
    } = props;

    return (
        <Fragment>
            <Title />
            <Button type="button" onNewGame={shuffleCards}/>
            <PlayingSurface
                choiceHandler={choiceHandler}
                cards={cards}
                choiceOne={choiceOne}
                choiceTwo={choiceTwo}
                disabled={disabled}
                card={card}
            />
            <Counter turns={turns}/>
        </Fragment>
    );
};

export default Game;