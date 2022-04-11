import './Activate.css';
import Activatelady from '../../Images/signup_ladyicon.svg';
import { Link } from "react-router-dom";




const Activate = () => {
  return (
    <div className="Activatepage">
        <div className="Activate">
          <div className='checkmail'>
            <div className='youremail'>
            <h2>Check your email</h2>
            <p>We've sent a message to <span>youremail@me.com</span> with a link to activate your account.</p>
            </div>
            <div>
            <h4>Didnt get an email?</h4>
            <p>If you don't see an email from us within a few minutes, a few things could have happened:</p>
            </div>
            <div className='listing'>
                <ul>
                    <li> The email is in your spam folder. (Sometimes things get lost in there.)</li>
                    <li> The email  address you entered had a mistake or typo, (Happens to the best of us.)</li>
                    <li> You accidentally gave us another email address. (Usually a work or personal one instead of the one you meant.)</li>
                    <li> We can't deliver the email to this address. (Usually because of corporate firewalls or filtering.)</li>
                </ul>

                <p><Link to="/Signup">Re-enter your email and try again</Link></p>
            </div>
          </div>
        </div>
        <div  className='Activatelady'>
          <div className="activateicon">
            <img src={Activatelady} alt="Activatelady"/>  
            </div>  
        </div>
    </div>
  )
}

export default Activate