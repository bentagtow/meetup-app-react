import cardClasses from './Card.module.css'

function Card(props){
    return <div className={cardClasses.cardOne}>{props.children}</div>;
}

export default Card;
