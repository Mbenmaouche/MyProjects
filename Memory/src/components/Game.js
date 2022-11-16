import React from 'react';

const Game = ({ card, setCardsNbr, cardsNbr, imagesClicked, imagesClickedSet, verifyCards, animals, changeSrcImg, resetGame, resetImagesClicked, timer, setTimer, updateTimer }) => {
    

    const handleChangeSrc = (e) => {
        console.log(card.src)
        if (card.src === "./logo192.png") {
            changeSrcImg(card.id)
            console.log(card)
            const newImagesClicked = [...imagesClicked, card];
            imagesClickedSet(newImagesClicked);
            console.log(imagesClicked.length)
            if (newImagesClicked.length === 2) {
                setTimeout(function () {
                    verifyCards(newImagesClicked);
                }, 500)

            }
        }
    }
    return (
        <li className="card">
            <img src={card.src} alt={"animal : " + card.name} onClick={(e) => handleChangeSrc(e)} />
            <div className="infos">
                <h2>{card.name}</h2>
                <h4>{card.twinFind}</h4>

            </div>
        </li>
    );
};

export default Game;
