import React, {useEffect, useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import Header from "./components/Header";
import Game from "./pages/Game";
import Cats from "./pages/Cats";

import './App.css';


const cardImages = [
    {src: "/img/tilly.jpg", matched: false, name: "Tilly", detail: "Manley Court's grande dame, and a keeper of secrets with " +
            "more than a few of her own. Though no longer an active member, she still holds considerable sway within the council of the Manley Cats."},
    {src: "/img/maurice1.jpg", matched: false, name: "Maurice", detail: "Acrobat, thieve, and an unbearable show-off. Nobody " +
            "sees him until he's ready to be seen - and then you get the full treatment. The most stylish" +
            " douchebag in the cat council."},
    {src: "/img/stormie.jpg", matched: false, name: "Stormie", detail: "Tilly's grandchild, and the soon-to-be head of the cat council. Creative thinker, resourceful" +
            ", very proud and thus susceptible to intellectual flattery. The future is bright."},
    {src: "/img/fluffy.jpg", matched: false, name: "Lola", detail: "Though clothed in raw hairy power, she lives in " +
            "perpetual fear - fear that urges her to act before it's too late. Holding her is like holding a grenade without the safety clip. The other members fear and love her."},
    {src: "/img/greyPrince.jpg", matched: false, name: "Cosmo", detail: "The secret member of the cat council. " +
            "Almost supernatural ability to read his surroundings. As he listens to the streets, he cannot be bothered to listen to you. He waits for the 'event'." +
            " What is the 'event'? The event no cat has dared to suspect would ever come to pass."},
    {src: "/img/notCat.jpg", matched: false, name: "Tookie and Tookie II", detail: "A slight tendency towards drama urges them to treat Manley Court as a stage." +
            " Technically not cats but, hey, nobody's perfect."},

];

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))

        setChoiceOne(null); // Makes sure there are no cards chosen from previous game
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }

    const choiceHandler = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    };

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    }

    // Compare two selected cards
    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);

            if (choiceOne.src === choiceTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo]);

    // Auto start at mount
    useEffect(shuffleCards, []);


    return (
        <div className="App">
            <Header/>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/game" />
                    </Route>
                    <Route path="/game">
                        <Game
                            choiceHandler={choiceHandler}
                            shuffleCards={shuffleCards}
                            cards={cards}
                            choiceOne={choiceOne}
                            choiceTwo={choiceTwo}
                            disabled={disabled}
                            turns={turns}
                        />
                    </Route>
                    <Route path="/cats">
                        <Cats cards={cardImages}/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
