import mailcheck from '../Images/mailcheck.svg';
import './SendMail_Component.css';
import Button from '../Components_Home/Button/Button';



const SendMail_Component = ({Btext, title, text, }) => {
  return (
    <div className='SendMail'>
        <div className="mailTo">
        <div className='circle-mail'><img src={mailcheck} alt="mailcheck"/></div>
        <div>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
        </div>
        <div>
            <Button css="Btnmail" text={Btext} />
        </div>
    </div>
  )
}

export default SendMail_Component