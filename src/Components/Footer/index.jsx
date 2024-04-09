import "./style.scss";
import logo from "../../assets/png/vecteezy_raccoon-transparent-background-ai-generative_32480339.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <h3>@DaryaRaud</h3>
      </div>
    </footer>
  );
};

export default Footer;
