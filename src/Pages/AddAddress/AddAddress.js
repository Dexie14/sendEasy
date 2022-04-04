import Address_lady from '../../Images/addaddressimage.svg';
import './AddAddress.css';
import { Link } from "react-router-dom";
import Formgroup from '../../SignUp_Components/Formgroup/Formgroup';
import Button from '../../Components_Home/Button/Button';
import {useNavigate} from 'react-router-dom';



const AddAddress = () => {


    const navigate = useNavigate();
    const handleSubmit = (evt) => {
      evt.preventDefault();
      // props.history.push("/");
      navigate('/Contacts')
  };


  return (
    <div className="Addresspage">
        <div className='Address'>
            <h4>Account Set Up</h4>
                    <div className="planpick">
                        <h5>Plan <i class="arrowplan right"></i></h5>
                        <p className="fontchange"><Link to="/Profile">Profile</Link> <i class="arrowplan right arr new"></i></p>
                        <p><Link to="/AddAddress">Address</Link> <i class="arrowplan right arr"></i></p>
                        <p>Contacts <i class="arrowplan right arr"></i></p>
                        <p>Customize <i class="arrowplan right arr"></i></p>
                        <p>Finish</p>
                    </div>
                    <hr></hr> 
                    <div className='Addressform'>
                        <h2>Add your address</h2>
                        <p>But why? Believe it or not, we need a physical address to make sure
                        your emails comply with <Link to="/">international anti-spam laws.</Link> Don't have an
                        official business address? Learn about <Link to="/">physical address alternatives</Link> 
                        </p>
                        <form onSubmit={handleSubmit}>
                            <Formgroup
                            label="Address line 1 (Street address or post office box)"
                            type="text"
                            // value={signupForm.username}
                            // onChange={(event) => changeHandler(event, 'username')}
                            required={true}
                            />
                              <Formgroup
                            label="Address line 2"
                            type="text"
                            // value={signupForm.username}
                            // onChange={(event) => changeHandler(event, 'username')}
                            required={true}
                            />
                            <div  className='city'>
                              <Formgroup
                            label="City"
                            type="text"
                            namecss="citycss"
                            placeholder="Lagos"
                            // value={signupForm.username}
                            // onChange={(event) => changeHandler(event, 'username')}
                            required={true}
                            />
                              <Formgroup
                            label="State/Province/Region"
                            type="text"
                            namecss="citycss"
                            placeholder="La"
                            // value={signupForm.username}
                            // onChange={(event) => changeHandler(event, 'username')}
                            required={true}
                            />
                            </div>
                                <Formgroup
                            label="ZIP/Postal code"
                            type="text"
                            placeholder="101211"
                            // value={signupForm.username}
                            // onChange={(event) => changeHandler(event, 'username')}
                            required={true}
                            />
                              <select>
                                <option>Nigeria</option>
                                <option>United States</option>
                                <option>Canada</option>
                            </select>
                            <Button css="BtnAddress" text="Continue" type="submit"/>
                        </form>
                    </div>
        </div>

        <div className='Addresslady'>
            <img src={Address_lady} alt="Addresslady"/>  
        </div>
    </div>
  )
}

export default AddAddress