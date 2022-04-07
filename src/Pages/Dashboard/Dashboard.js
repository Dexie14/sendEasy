import Dash_component from '../../Dash_component/Dash_component';
import Start_component from '../../Start_component/Start_component';
import check from '../../Images/check.svg';
import './Dashboard.css';
import email from '../../Images/dashboard_email.svg';
import textmessage from '../../Images/dashboard_textmessage.svg';
import audiencedash from '../../Images/dashboard_audience.svg';




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
            <div className='startcomponent'>
            <Start_component emailcss='emailcss' dashimage={email} title='Send your first email' text='Choose a pre-designed template' BEmail='BEmail'/>
            <Start_component textcss='textcss' dashimage={textmessage} title='Send your first text message' text='Choose a pre-designed template' Btext='BEmail'/>
            <Start_component audiencecss='audiencecss'dashimage={audiencedash} title='Create audience' text="Once you add your contacts, you'll be able to send your first campaign" Baudience='BEmail'/>
            </div>
            <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default Dashboard