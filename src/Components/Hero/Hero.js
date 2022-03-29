import './Hero.css';
import heroimage from '../../Images/hero_image.svg';
import quest from '../../Images/question.svg';
import Button from '../Button/Button';



const Hero = () => {
        return (
        <div className="Hero">
            <div className="Hero-content">
                <div className="hero-text">
                <div className="Htext">
                <h1>Accelerate sales and grow your business with send easy</h1> 
                <p>Get all of the email marketing, CRM, and automation tools you need for increased profits, better workflows <br/> and happier customers</p>
                </div>
                <div className="Btn">
                    <a href="https://www.google.com/">
                    <Button css="BtnSignUp" text="Sign Up"/>
                    </a>
                    <Button css="BtnSign" img={true} text="Sign in with Google"/>
                </div>
                </div>
                <div className="hero-image">
                    <img className="heroI" src={heroimage} alt="hero-image"/>
                    <img className="quest" src={quest} alt="quest"/>
                </div>
            </div>
        </div>
    );
};

export default Hero