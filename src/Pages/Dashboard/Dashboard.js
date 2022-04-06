import Dash_component from '../../Dash_component/Dash_component';
import Start_component from '../../Start_component/Start_component';
import check from '../../Images/check.svg';
import './Dashboard.css';
import email from '../../Images/dashboard_email.svg';




const Dashboard = () => {
  return (
    <div className='DashboardPage'>
      <div className='Dash_component'>
      <Dash_component />
      </div>
      <div className="Dashboard">
        <div className='Dashwidth'>
             <hr></hr>
            <div className='Dashboardtop'>
              <p>Create your first campaign</p>
              <div className="dashboardcheck">
              <div className='circle-check'><img src={check} alt="check"/>
              </div><i class="arrowplan up"></i>
              </div>
            </div>
            <p className="choose">Chose how you'd like to start</p>
            <Start_component dashimage={email} BEmail='BEmail'/>
            <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default Dashboard