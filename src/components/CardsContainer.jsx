import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import cardsData from "../data/cards.json";
import Loading from "./Loading";
import Winner from "./Winner";
import Looser from "./Looser";
import { Link, useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";

function CardsContainer({
  uniqueCards,
  levelNumber,
  time,
  flips,
  setFlips,
  setTime,
}) {
  const [shuffledCards, setShuffleCards] = useState([]);
  const [matchCards, setMatchCards] = useState([]);
  const [flippedCard, setFlippedCard] = useState();
  const [lockBoard, setLockBoard] = useState(false);
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  const timerRef = useRef(null);

  const winSound = useRef(null);
  const matchSound = useRef(null);
  const notMatchSound = useRef(null);
  const looseSound = useRef(null);

  // 2. Initialize the game  called by restart and use effect

  const initializeGame = async () => {
    setLoading(true);
    setShuffleCards([]);
    setMatchCards([]);
    setFlippedCard(null);
    setFlips(0);
    setLockBoard(false);
    setTime(50);
    setWinner(false);
    setGameOver(false);

    //3. simulating loading effect
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    const cards = [];
    //4. Create cards

    for (let i = 0; i < uniqueCards; i++) {
      cards.push({ ...cardsData[i], key: i * 2 });
      cards.push({ ...cardsData[i], key: i * 2 + 1 });
    }

    //5. Shuffle using Fisher-Yates Algorithm

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    setShuffleCards(cards);

    //6. startTimer
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTime((time) => {
        if (time <= 1) {
          loose();

          return 0;
        }
        return time - 1;
      });
    }, 1000);
  };

  // 1. Initialize the game make the board ready
  useEffect(() => {
    initializeGame();

    //last step
    return () => {
      clearInterval(timerRef.current);
    };
  }, [uniqueCards]);

  ////////////////winnner
  function win() {
    winSound.current.play();
    clearInterval(timerRef.current);
    setLockBoard(true);

    setWinner(true);
  }

  ///////////////////loose
  function loose() {
    matchSound.current.pause();
    notMatchSound.current.pause();
    looseSound.current.play();
    clearInterval(timerRef.current);
    setLockBoard(true);
    setGameOver(true);
    console.log(gameOver);
  }

  //8. check for the match
  function checkMatch(card1, card2) {
    setLockBoard(true);

    //matched
    if (card1.dataset.value === card2.dataset.value) {
      setTimeout(() => {
        setMatchCards([...matchCards, card1.id, card2.id]);
        setFlippedCard();
        matchSound.current.play();

        //9. winner
        if ((uniqueCards - 1) * 2 === matchCards.length) {
          matchSound.current.pause();
          notMatchSound.current.pause();

          setTimeout(() => {
            win();
          }, 500);
        }
        setLockBoard(false);
      }, 600);
    }

    //not matched
    else {
      setTimeout(() => {
        notMatchSound.current.play();
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        setFlippedCard();
        setLockBoard(false);
      }, 600);
    }
  }

  //7. add event to each card flip the card
  const flipTheCard = (card) => {
    if (lockBoard || matchCards.includes(card.id) || flippedCard === card)
      return;
    setFlips((flips) => flips + 1);
    card.classList.add("flipped");

    if (flippedCard) {
      checkMatch(flippedCard, card);
    } else {
      setFlippedCard(card);
    }
  };



  return (
    <>
      {/* Audio Tags */}
      <audio ref={winSound} src="/sounds/winning.mp3" preload="auto" />
      <audio ref={looseSound} src="/sounds/gameover.mp3" preload="auto" />
      <audio
        ref={notMatchSound}
        src="/sounds/notmatchsound.m4a"
        preload="auto"
      />
      <audio ref={matchSound} src="/sounds/matched.m4a" preload="auto" />
      {shuffledCards.length === 0 && <Loading />}
      {winner ? (
        <Winner time={time} flips={flips} levelNumber={levelNumber} />
      ) : gameOver ? (
        <Looser restart={initializeGame} />
      ) : (
        <div
          className={`card-outer-container card-outer-container-${levelNumber}`}
        >
          {shuffledCards.map((card) => (
            <Card key={card.key} imageSource={card} handler={flipTheCard} />
          ))}
        </div>
      )}

      {/* Restart Button */}
      <button
        disabled={gameOver || winner}
        onClick={initializeGame}
        className="restart-btn"
      >
        <i className="fa-solid fa-arrow-rotate-right"></i>
      </button>

      {/*============Go to Home ===================*/}
      <HomeButton gameOver={gameOver} winner={winner}/>
    </>
  );
}

export default CardsContainer;
