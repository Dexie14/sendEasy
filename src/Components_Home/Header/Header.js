import sendEasy from '../../Images/sendEasylogo.svg';
import search from '../../Images/search.svg';
import classes from './Header.module.css';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className={classes.head} >
    <header>
        <div className={classes.headerimage}>
        <Link to="/"><img src={sendEasy} alt="sendEasy" /></Link>
        </div>

        <div className={classes.Navbar}>
            <nav className={classes.nav}>
                <ul className={classes.navlink} >
                    <li >
                        <Link to="/">Products</Link>
                    </li>
                    <li >
                        <Link to="/">Resources</Link>
                    </li>
                    <li >
                        <Link to="/">Inspiration</Link>
                    </li>
                    <li >
                        <Link to="/">Pricing</Link>
                    </li>
                </ul>
            </nav>

            <div className={classes.icons}>
                <div className={classes.icon}>
                    <img src={search} alt="search" />
                </div>

            <div className={classes.headerlogin}>
                <Link to="/Login">Log In</Link>
            </div>
            <div className={classes.headersignup}>
                <Link to="/Signup">Sign Up</Link>
            </div>
            </div>
        </div>
    </header>
    </div>
  );
};

export default Header
