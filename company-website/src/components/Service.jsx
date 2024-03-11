import "./service.css";

export default function Service(props) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
