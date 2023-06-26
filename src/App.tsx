import { useState } from 'react';
import './App.css'
import CardContainer from './components/CardContainer';

interface CardData {
  id: number;
  imgUrl: string;
}

function App() {
  const NUM_CARDS = 10;

  const generateCard = (idx: number) => {
    return {
      id: idx,
      imgUrl: `https://picsum.photos/200?sig=${idx}`
    }
  }

  const seedCards = (NUM_CARDS: number) => {
    let i = 0;
    let cards: CardData[] = [];
    while (i < NUM_CARDS) {
      cards.push(generateCard(i));
      i++;
    }
    return cards;
  }

  const [cards, setCards] = useState<CardData[]>(seedCards(NUM_CARDS));

  const moveCard = (direction: 'left' | 'right', cardToEdit: CardData) => {
    setCards((prevCards) => {
      const cardIndex = prevCards.findIndex((card) => card.id === cardToEdit.id);
      
      // copy prevCards using the spread operator
      const newCards = [...prevCards];

      if (direction === 'left' && cardIndex > 0) {
        // swap positions with a temp variable
        let temp = newCards[cardIndex - 1];
        newCards[cardIndex - 1] = newCards[cardIndex];
        newCards[cardIndex] = temp;
      } else if (direction === 'right' && cardIndex < newCards.length - 1) {
        let temp = newCards[cardIndex + 1];
        newCards[cardIndex + 1] = newCards[cardIndex];
        newCards[cardIndex] = temp;
      }

      return newCards;
    });
  }

  return (
    <>
    <h1>Mood Board</h1>
      <CardContainer cards={cards} onMoveCard={moveCard} />
    </>
  )
}

export default App