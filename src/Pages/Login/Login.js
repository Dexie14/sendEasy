import { Link } from "react-router-dom";
import './Login.css';
import login_lady from '../../Images/signup_ladyicon.svg';
import Formgroup from '../../SignUp_Components/Formgroup/Formgroup';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../Components_Home/Button/Button';


const Login = () => {

    const [signupForm, setSignupForm] = useState({
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
    <div  className="Loginpage">
        <div className="Loginform">
         <div>
            <h2>Log In</h2>
            <p>Need a SendNow account? <Link to="/Signup">Create an account</Link></p>
            <form onSubmit={handleSubmit}>
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
                <h5><Link to="/">Forgot password?</Link></h5>
                <Button css="BtnLogin" text="Log In" type="submit"/>
            </form>
         </div>
        </div>
        <div className='Loginlady'>
            <img src={login_lady} alt="loginlady"/>   
        </div>
    </div>
  )
}

export default Login