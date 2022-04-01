import signup_lady from '../../Images/signup_ladyicon.svg'
import './Signup.css';
import Formgroup from '../../SignUp_Components/Formgroup/Formgroup';
import { Link } from "react-router-dom";
import Button from '../../Components_Home/Button/Button';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = (props) => {
  console.log(props);

  const [signupForm, setSignupForm] = useState({
    email: '',
    username: '',
    password: '',
  });

  const changeHandler = (evt, type) => {
    setSignupForm({
      ...signupForm,
      [type]: evt.target.value.trim(),
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // props.history.push("/");
    navigate('/')
};

const [passwordShown, setPasswordShown] = useState(false);
const togglePassword = (evt) => {
  setPasswordShown(!passwordShown);
};

  return (
    <div className="SignPage"> 
    <div className="Signup">
        <div className="signupform">
          <div className="Formwidth">
          <h2>Welcome to SendEasy</h2>
          <p>Create an account or <Link to="/">log in</Link></p>
        <form onSubmit={handleSubmit}>
        <Formgroup
          label="Email"
          type="email"
          value={signupForm.email}
          onChange={(event) => changeHandler(event, 'email')}
          required={true}
        />
         <Formgroup
          label="Username"
          type="text"
          value={signupForm.username}
          onChange={(event) => changeHandler(event, 'username')}
          required={true}
        />
         <Formgroup
          label="Password"
          img="img"
          PasswordShow={passwordShown}
          onClick={togglePassword}
          passcss="passcss"
          type={passwordShown ? "text" : "password"}
          value={signupForm.password}
          onChange={(event) => changeHandler(event, 'password')}
          required={true}
          minLength={6}
          maxLength={20}
        />
           <div className='checkB'>
              <input type="checkbox" id="check"/>
              <label for="promotional emails">I don't want to receive <Link to="/">promotional emails</Link> from SendEasy.</label>
          </div>
          <h5>By creating an account, you agree to our <Link to="/">Terms</Link>and have read and acknowledge the <Link to="/">Global Privacy Statement.</Link></h5>
          <Button css="BtnSigning" text="Sign Up" type="submit"/>
          {/* <button className="BtnSigning" type="submit" >Sign Up</button> */}
        </form>
        </div>
        </div>


        <div className="lady">
            <div className="ladyicon">
            <img src={signup_lady} alt="signuplady"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup;