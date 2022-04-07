import Dash_component from '../../Dash_component/Dash_component';
import './Sendmail_text.css';
import SendMail_Component from '../../SendMail_Component/SendMail_Component';
import Button from '../../Components_Home/Button/Button';



const Sendmail_text = () => {
  return (
    <div className='DashboardPage'>
            <div className='Dash_component'>
            <Dash_component />
            </div>
            <div className='mail_component'>
                <hr></hr>
                <div className='mailcontent'>
                <h2>Untitled</h2><p>Edit name</p>
                <div className='mailbox'>
                <SendMail_Component title='To' text='Who are you sending this campaign to?' Btext='Select Audience' />
                <hr></hr>
                <SendMail_Component title='From' text='Who is sending this campaign?' Btext='Add From' />
                <hr></hr>
                <SendMail_Component title='Subject' text="What's the subject line for this campaign?" Btext='Add Subject' />
                <hr></hr>
                <SendMail_Component title='Content' text='Design the content for your email.' Btext='Design Email' />
                </div>
                <div className='BT'><Button css="Btnsend" text=' Send' /></div>
                </div>
                
            </div>
    </div>
  )
}

export default Sendmail_text