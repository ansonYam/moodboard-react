import Card from './Card';

interface CardData {
    id: number;
    imgUrl: string;
}

interface CardContainerProps {
    cards: CardData[];
    onMoveCard: (direction: 'left' | 'right', cardToEdit: CardData) => void;
}

export default function CardContainer({ cards, onMoveCard }: CardContainerProps) {
    return (
        <ul className="cards">
            {cards?.map((card) => {
                return <Card
                    key={card.id}
                    id={card.id}
                    imgUrl={card.imgUrl}
                    onMoveLeft={() => onMoveCard('left', card)}
                    onMoveRight={() => onMoveCard('right', card)} />
            })}
        </ul>
    );
}