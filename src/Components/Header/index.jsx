import "./style.scss";
import logo from "../../assets/png/vecteezy_raccoon-transparent-background-ai-generative_32480339.png";

const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
