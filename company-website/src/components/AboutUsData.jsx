import "./aboutUs.css";

export default function AboutUsData(props) {
  return (
    <div className={props.className}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
    </div>
  );
}
