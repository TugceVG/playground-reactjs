import "./hero.css";
import { Button } from "./Button";

export default function Hero() {
  return (
    <div className="hero-container">
      <h1>MRC INSAN KAYNAKLARI</h1>
      <p>Kaliteli Hizmetin Adresi</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          HEMEN ARA
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}
