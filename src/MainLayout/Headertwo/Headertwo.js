import sendEasy from '../../Images/sendEasylogo.svg';
import search from '../../Images/search.svg';
import classes from '../Headertwo/Headertwo.module.css';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";


const Headertwo = () => {

    const [isOpen, setIsOpen] = useState(false);

    const showSideBar = () => setIsOpen(!isOpen);

  return (
    <div className={classes.head} >
    <header>
        <div className={classes.headerimage}>
        <Link to="/"><img src={sendEasy} alt="sendEasy" /></Link>
        </div>

        <div className={isOpen ? classes.NavHAM : classes.Navbar}>
            
        {isOpen && (
            <button
                className={`${classes.bar} ${classes.hideBar}`}
                onClick={showSideBar}
            >
                <FaTimes />
            </button>
            )}
            
            <nav className={classes.nav}>
                <ul className={classes.navlink} >
                    <li className={classes.pro} >
                        <Link to="/">Products</Link>
                    </li>
                    <li className={classes.pro}>
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
        <button className={classes.bar}  onClick={showSideBar}> <FaBars /></button>
    </header>
    </div>
  );
};

export default Headertwo
