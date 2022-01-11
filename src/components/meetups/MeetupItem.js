import meetupItemClasses from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li className={meetupItemClasses.item}>
      <Card>
        <div className={meetupItemClasses.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={meetupItemClasses.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={meetupItemClasses.action}>
          <button>Add to Favs</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
