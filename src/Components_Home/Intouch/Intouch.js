import './Intouch.css';
import Touchcard from '../Touchcard/Touchcard';
import emailmarketing from '../../Images/email_marketing.svg';
import female_textmessaging from '../../Images/female_textmessaging icon.svg';
import chatbots from '../../Images/chatbots.svg';
import webpush from '../../Images/webpush.svg';

const Intouch = () => {
    return ( 
        <div> 
        <div className="intouch">
            <h2>Stay in touch with your customers <br/> wherever they are</h2>
        </div>
        <div className="intouchCard">
            <Touchcard csss="cssimage1" image={emailmarketing} title="Email Marketing" text="Deliver valuable content straight to your audience's inboxes"/>
            <Touchcard csss="cssimage2" image={female_textmessaging} title="Text Messaging" text="Reach your prospects on their mobile phones while they’re on the go"/>
            <Touchcard csss="cssimage3" image={chatbots} title="Chatbots" text="Use chatbots to connect with your audience in real time"/>
            <Touchcard css="css4" csss="cssimage4" image={webpush} title="Web Push" text="Connect with your subscribers, no matter what they’re doing online"/>
        </div>
        </div>
    );
}
 
export default Intouch;