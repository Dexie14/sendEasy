import './Dash_component.css';
import dashsendeasy from '../Images/DashsendEasyyLogo.svg';
import dashbox from '../Images/dashboard_box.svg';
import { Link } from "react-router-dom";
import create from '../Images/create_vector.svg';
import audience from '../Images/audience.svg';
import Campaigns from '../Images/campaign.svg';
import Automations from '../Images/automation.svg';
import searchdash from '../Images/dashboard_search.svg';
import newuser from '../Images/newuser.svg';





const Dash_component = () => {
  return (
  <div className='dashcontainer'>
    <div className='dashboardNav'>
      <div className='DashNav'>
          <div className='dashhead'>
              <div className='dashlogo'>
              <Link to="/"><img src={dashsendeasy} alt="dashsendEasy" /></Link>
              </div>
              <div className='dashbox'>
              <Link to="/"><img src={dashbox} alt="dashsendEasy" /></Link>
              </div>
          </div>
            <div className='create'>
              <div className='circle-create'><img src={create} alt="create"/></div>
              <p>Create</p>
            </div>
              <div className='audience'>
              <img src={audience} alt="audience"/>
              <select><option>Audience</option><option>NewAudience</option></select>
              </div>
                <div className='Campaigns'>
                <img src={Campaigns} alt="Campaigns"/>
                <select><option>Campaigns</option><option>NewCampaigns</option></select>
                </div>
                  <div className='Automations'>
                  <img src={Automations} alt="Automations"/>
                  <select><option>Automations</option><option>NewAutomations</option></select>
                  </div>
                    <div className='searchdash'>
                    <img src={searchdash} alt="searchdash"/>
                    <p>Search</p>
                    </div>
                        <div className='upgrade'>upgrade</div>
                          <div className='newuser'>
                          <img src={newuser} alt="newuser"/>
                          <div className='usertext'><h5>Newuser1</h5><p>New user</p></div>
                          </div>
      </div>
    </div>
    <hr></hr>
  </div>
  );
};

export default Dash_component