import { useContext } from "react";

import meetupItemClasses from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

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
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "remove from favs" : "Add to Favs"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
