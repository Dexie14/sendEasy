import './Dash_component.css';
import dashsendeasy from '../Images/DashsendEasyyLogo.svg';
import dashbox from '../Images/dashboard_box.svg';
import { Link } from "react-router-dom";




const Dash_component = () => {
  return (
    <div className='dashboardNav'>
        <div className='dashhead'>
            <div className='dashlogo'>
            <Link to="/"><img src={dashsendeasy} alt="dashsendEasy" /></Link>
            </div>
            <div className='dashbox'>
            <Link to="/"><img src={dashbox} alt="dashsendEasy" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Dash_component