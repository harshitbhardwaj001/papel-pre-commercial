import "./HeroStyles.css";
import { NavHashLink } from "react-router-hash-link";

function Hero(props) {
  return (
    <>
      <div className={props.cName} id="home">
        <img src={props.heroImg} alt="HeroImg" />
        <div className="hero-text">
          <p>{props.desc}</p>
          <h1>{props.title}</h1>
          <NavHashLink smooth to={props.url} className={props.btnClass}>
            {props.btnText}
          </NavHashLink>
        </div>
      </div>
    </>
  );
}

export default Hero;
