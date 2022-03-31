import Hero from "../../Components_Home/Hero/Hero";
import Intouch from '../../Components_Home/Intouch/Intouch';
import Footer from '../../Components_Home/Footer/Footer';
import classes from './Home.module.css';


const Home = () => {
    return (
        <div className={classes.Home}>
            <Hero />
            <Intouch />
            <Footer />
        </div>
    );
}
 
export default Home;