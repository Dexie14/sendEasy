import email from '../../Images/email.png';
import './Button.css';
// import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="button">
        <button className={props.css}>
        {props.img && <img src={email} alt="email" className='image' />}
        {props.text}
        </button>
    </div>
  )
}

export default Button

// {props.img && <img src={Popular} alt="popular" />}
// style={{borderRadius: "4px", display: "flex"}} 

  // className={'${props.css} ${props.img}'}