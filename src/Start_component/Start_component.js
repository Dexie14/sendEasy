import './Start_component.css';
import Button from '../Components_Home/Button/Button';
import { Link } from "react-router-dom";




const Start_component = ({dashimage,BEmail, title, text, Btext, Baudience, audiencecss, textcss, emailcss}) => {
  return (
    <div className='Startcomp'>
        <div className={`${emailcss} ${audiencecss} ${textcss} `}>
            <div className="theimage"><img src={dashimage} alt="dashimage"/></div>
        </div>
        <div className="starttext">
            <p>{title}</p>
            <p>{text}</p>
            {BEmail && <Link to="/Sendmail_text"><Button css="BtnDash" text="Create Email" /></Link>}
            {Btext && <Link to="/Sendmail_text"><Button css="BtnDash" text="Create Text" /></Link>}
            {Baudience && <Link to="/"><Button css="Btnaud" text="Create Audience" /></Link>}
        </div>
    </div>
  );
};

export default Start_component