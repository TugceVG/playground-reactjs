import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            {/* <h4 className="cards__item__title">{props.title}</h4> */}
            <h5 className="cards__item__text">{props.title}</h5>
            {/* <p className="cards__item__text">{props.text}</p> */}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
