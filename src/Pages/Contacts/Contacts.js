import contact_image from '../../Images/contactimage.svg';
import './Contacts.css';
import { Link } from "react-router-dom";
import Button from '../../Components_Home/Button/Button';
import {useNavigate} from 'react-router-dom';



const Contacts = () => {


    const navigate = useNavigate();
    const handleSubmit = (evt) => {
      evt.preventDefault();
      // props.history.push("/");
      navigate('/Dashboard')
  };


  return (
    <div className="Contactspage">
        <div className='Contacts'>
            <h4>Account Set Up</h4>
                 <div className="planpick">
                        <h5>Plan <i class="arrowplan right"></i></h5>
                        <p className="fontchange"><Link to="/Profile">Profile</Link> <i class="arrowplan right arr new"></i></p>
                        <p className="fontchange"><Link to="/AddAddress">Address</Link> <i class="arrowplan right arr new"></i></p>
                        <p><Link to="/Contacts">Contacts</Link> <i class="arrowplan right arr"></i></p>
                        <p>Customize <i class="arrowplan right arr"></i></p>
                        <p>Finish</p>
                    </div>
                    <hr></hr> 
                    <div className='Contactsform'>
                        <h2>Tell us about your contacts</h2>
                        <p>This can include people who signed up to receive marketing emails
                            from your organization, or those who solely receive transactional
                            emails. Learn more about <Link to="/">SendEasy contact types.</Link>
                        </p>
                        <div className='radio'>
                            <h5>Do you have any contacts?</h5>
                            <form onSubmit={handleSubmit}>
                            <div>
                            <input type="radio" name="cont" id="yes" required/>
                            <label for="yes">Yes</label>
                            </div>
                            <div>
                            <input type="radio" name="cont" id="no" required />
                            <label for="no">No</label>
                            </div>
                            <div>
                            <input type="radio" name="cont" id="notsure" required />
                            <label for="notsure">I'm not sure...</label>
                            </div>
                            <Button css="BtnContact" text="Continue" type="submit"/>
                            </form>
                        </div>
                    </div>
        </div>

        <div className='Contactimage'>
            <img src={contact_image} alt="contact_image"/>  
        </div>
    </div>
  )
}

export default Contacts