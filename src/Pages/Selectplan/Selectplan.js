import './Selectplan.css';
import Button from '../../Components_Home/Button/Button';
import Plancard from '../../Plancard_component/Plancard';
import { Link } from "react-router-dom";


const Selectplan = () => {

    return (
        <div className="SelectPlan">
            <h4>Account Set Up</h4>
            <div className="planpick">
                <h5>Plan <i class="arrowplan right"></i></h5>
                <p>Profile <i class="arrowplan right arr"></i></p>
                <p>Address <i class="arrowplan right arr"></i></p>
                <p>Contacts <i class="arrowplan right arr"></i></p>
                <p>Customize</p>
            </div>
            <hr></hr> 

            <div className="plancards">
            <Plancard title="Premium" text="Advanced features for pros who need more customization." pay="You'll pay" digit="299" contact='with 10,000 contacts'/>
            <Plancard cardcss="cardcss" easy="easy" title="Premium" text="Advanced features for pros who need more customization." pay="You'll pay" digit="299" contact='with 10,000 contacts'/>
            <Plancard title="Premium" text="Advanced features for pros who need more customization." pay="You'll pay" digit="299" contact='with 10,000 contacts'/>
            <Plancard curr="curr" currcss="currcss" title="Premium" text="Advanced features for pros who need more customization." pay="You pay" digit="299" contact='with 10,000 contacts'/>
            </div>

            <div>
            <i class="arrowplan arrr right"></i><span>Compare Plan Features</span>
                <div className='planfeatures'>
                    <div className="summary">
                        <h2>Purchase Summary</h2>
                        <p>Billed in <span>
                            <select>
                                <option>US Dollars</option>
                                <option>Naira</option>
                                <option>Euro</option>
                            </select>
                        </span></p>
                    </div>
                    <div className="free">
                    <div className="freeplan">
                    <h5>Free plan</h5> <h5>$0.00</h5> 
                    </div>
                    <p>2,000 contacts*</p>
                    <p>10,000 email sends*</p>
                    <Link to="/">
                    <Button css="BtnPlan" text="Next" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selectplan
