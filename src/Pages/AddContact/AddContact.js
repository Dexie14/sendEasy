import Dash_component from '../../Dash_component/Dash_component';
import Button from '../../Components_Home/Button/Button';
import './AddContact.css';



const AddContact = () => {
  return (
    <div  className='DashboardPage'>
        <div className='Dash_component'>
        <Dash_component />
        </div> 
        <div className='AddContact'>
            <h4>Add your contacts</h4>
            <h2>These are the people who make up your audience</h2>
            <p>Once you add contacts, you'll be able to send campaigns.</p>
            <Button css="BtnAddContact" text='Import Contacts' />
            <hr></hr>
            <h4>Audience List</h4>
            <div className='Audiuencewidth'>
            <div className='AudienceList'>
                    <div className='AUDlist'><h5>Product Design</h5> <i class="arrowplan right"></i></div>
                    <hr></hr>
                    <div className='AUDlist'><h5>Front End</h5> <i class="arrowplan right"></i></div>
                    <hr></hr>
                    <div className='AUDlist'><h5>Flutter</h5> <i class="arrowplan right"></i></div>
                    <hr></hr>
                    <div className='AUDlist'><h5>Back End</h5> <i class="arrowplan right"></i></div>
            </div>
                     <Button css="BtnEdit" text='Edit' />
            </div>
            

        </div>      
    </div>
  )
}

export default AddContact