import '../App.css';
import Navigation from './Navigation';
import image from '../images/Logo.svg';
const Header = () => {
  return (
    <header className=" flex justify-between">
      <div className="logo-title ">
        <img src={image} />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
