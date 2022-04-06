import './Start_component.css';
import Button from '../Components_Home/Button/Button';
import { Link } from "react-router-dom";




const Start_component = ({dashimage,BEmail}) => {
  return (
    <div>
        <div className="">
            <img src={dashimage} alt="dashimage"/>
        </div>
        <div className="">
            <p>Send your first email</p>
            <p>Choose a pre-designed template</p>
            {BEmail && <Link to="/"><Button css="BtnSigning" text="Create Email" /></Link>}
        </div>
    </div>
  );
};

export default Start_component