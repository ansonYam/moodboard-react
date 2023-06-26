interface CardProps {
    id: number;
    imgUrl: string;
    onMoveLeft: () => void;
    onMoveRight: () => void;
}

export default function Card ({id, imgUrl, onMoveLeft, onMoveRight}: CardProps) {
    return (
        <li className="cards_item">
            <div className="card">
                <div className="card_image">
                    <img src={imgUrl} alt={`Image ${id}`} />
                </div>
                <div className="card_content">
                    <button className="left" onClick={onMoveLeft}>Left</button>
                    <button className="right" onClick={onMoveRight}>Right</button>
                </div>
            </div>
        </li>
    )
}