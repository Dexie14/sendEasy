import Hero from "../../Components/Hero/Hero";
import Intouch from '../../Components/Intouch/Intouch';
import './Home.css';


const Home = () => {
    return (
        <div className="Home">
            <Hero />
            <Intouch />
        </div>
    );
}
 
export default Home;