import sendEasy from '../../Images/sendEasylogo.svg';
import search from '../../Images/search.svg';


const Header = () => {
  return (
    <div className="head">
    <header>
        <div className="headerimage">
            <img src={sendEasy} alt="sendEasy" />
        </div>

        <div className="Navbar">
            <nav className="nav">
                <ul className="navlink" >
                    <li >
                        <a href="">Products</a>
                    </li>
                    <li >
                        <a href="">Resources</a>
                    </li>
                    <li >
                        <a href="">Inspiration</a>
                    </li>
                    <li >
                        <a href="">Pricing</a>
                    </li>
                </ul>
            </nav>

            <div className="icons">
                <div className="icon">
                    <img src={search} alt="search" />
                </div>

            <div className="headerlogin">
                <a href="">Log In</a>
            </div>
            <div className="headersignup">
                <a href="">Sign Up</a>
            </div>
            </div>
        </div>
    </header>
    </div>
  );
};

export default Header
