import { Component } from "react";
import "./NavbarStyles.css";
import { NavHashLink } from "react-router-hash-link";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems" id="nav">
        {/* <h1 className="navbar-logo">Papel Water</h1> */}
        <div className="navbar-logo">
          <NavHashLink smooth to="/#home">
            <img src="/assets/img/Papel_Logo.png" alt="" />
          </NavHashLink>
          <span>&#174;</span>
        </div>
        <div className="menu-icons" onClick={this.handClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavHashLink
                  className={item.cName}
                  smooth
                  to={item.url}
                  onClick={this.handClick}
                >
                  <i className={item.icon}></i>
                  {item.title}
                </NavHashLink>
              </li>
            );
          })}
          <NavHashLink smooth to="/investorpage#deck">
            {console.log("Navigating")}
            <button>Papel's open deck for investors</button>
          </NavHashLink>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
