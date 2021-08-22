import './Header.css';
import logo from './Assets/logo.svg';
import arrow from './Assets/arrow-up-right.svg';

function Header() {
  return (
    <div>
      <header className="Header">

        <div className="Header-logo">
            <img src={logo} alt="logo" />
        </div>

        <div className="Statement-page-link">
           <span>What is a Statement Page?</span> 
            <img src={arrow} className="Header-newtab" alt="open in new tab" />
        </div>
        
      </header>
    </div>
  );
}

export default Header;
