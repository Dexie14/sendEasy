import Profile_lady from '../../Images/profileimage.svg';
import './Profile.css';
import { Link } from "react-router-dom";
import Formgroup from '../../SignUp_Components/Formgroup/Formgroup';
import Button from '../../Components_Home/Button/Button';
import {useNavigate} from 'react-router-dom';

const Profile = () => {



    const navigate = useNavigate();
    const handleSubmit = (evt) => {
      evt.preventDefault();
      // props.history.push("/");
      navigate('/AddAddress')
  };

  return (
    <div className="Profilepage">
        <div className='Profile'>
                <h4>Account Set Up</h4>
                <div className="planpick">
                    <h5>Plan <i class="arrowplan right"></i></h5>
                    <p><Link to="/Profile">Profile</Link> <i class="arrowplan right arr new"></i></p>
                    <p>Address <i class="arrowplan right arr"></i></p>
                    <p>Contacts <i class="arrowplan right arr"></i></p>
                    <p>Customize <i class="arrowplan right arr"></i></p>
                    <p>Finish</p>
                </div>
                <hr></hr> 
                <div className='profileform'>
                    <h2>Let's set up your account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='Names'>
                    <Formgroup
                        label="First Name"
                        type="text"
                        namecss="namecss"
                        // value={signupForm.username}
                        // onChange={(event) => changeHandler(event, 'username')}
                        required={true}
                        />
                          <Formgroup
                        label="Last Name"
                        type="text"
                        namecss="namecss"
                        // value={signupForm.username}
                        // onChange={(event) => changeHandler(event, 'username')}
                        required={true}
                        />
                        </div>
                          <Formgroup
                        label="Business Name"
                        type="text"
                        // value={signupForm.username}
                        // onChange={(event) => changeHandler(event, 'username')}
                        required={true}
                        />
                          <Formgroup
                        label="Website URL"
                        type="url"
                        placeholder="http://sendEasy.com"
                        // value={signupForm.username}
                        // onChange={(event) => changeHandler(event, 'username')}
                        required={true}
                        />
                          <Formgroup
                        label="Phone number"
                        type="tel"
                        // value={signupForm.username}
                        // onChange={(event) => changeHandler(event, 'username')}
                        required={true}
                        placeholder="0704-444-4444"
                        pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                        minLength={11}
                        maxLength={20}
                        />
                         <Button css="BtnProfile" text="Continue" type="submit"/>
                    </form>

                </div>
        </div>
        <div className='Profilelady'>
            <img src={Profile_lady} alt="Profilelady"/>  
        </div>

    </div>
  )
}

export default Profile