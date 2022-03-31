import signup_lady from '../../Images/signup_ladyicon.svg'
import './Signup.css';
import Formgroup from '../../SignUp_Components/Formgroup/Formgroup';
import { Link } from "react-router-dom";
import Button from '../../Components_Home/Button/Button';

const Signup = () => {
  return (
    <div className="SignPage"> 
    <div className="Signup">
        <div className="signupform">
          <div className="Formwidth">
          <h2>Welcome to SendEasy</h2>
          <p>Create an account or <Link to="/">log in</Link></p>
        <form>
        <Formgroup
          label="Email"
          type="email"
          placeholder="Email Address"
          // value={signupForm.email}
          // onChange={(event) => changeHandler(event, 'email')}
          required={true}
        />
         <Formgroup
          label="Username"
          type="text"
          placeholder="@janedoe"
          // value={signupForm.username}
          // onChange={(event) => changeHandler(event, 'username')}
          required={true}
        />
         <Formgroup
          label="Password"
          type="password"
          placeholder="Enter your password"
          // value={signupForm.password}
          // onChange={(event) => changeHandler(event, 'password')}
          required={true}
          minLength={6}
          maxLength={20}
        />
           <div className='checkB'>
              <input type="checkbox" id="check"/>
              <label for="promotional emails">I don't want to receive <Link to="/">promotional emails</Link> from SendEasy.</label>
          </div>
          <h5>By creating an account, you agree to our <Link to="/">Terms</Link>and have read and acknowledge the <Link to="/">Global Privacy Statement.</Link></h5>
          <Link to="/"><Button css="BtnSigning" text="Sign Up" /></Link>
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

export default Signup