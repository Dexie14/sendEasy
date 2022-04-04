import './Plancard.css';



const Plancard = ({title, text, pay, digit, contact, easy, cardcss, curr, currcss}) => {
  return (
      <div>
            {easy && <div className='recommend'>SendEasy Recommends</div>}
    <div className={`Plancard ${cardcss}`}>
            {curr && <div className='current'>Current Plan</div>}
            <div className={`premium ${currcss}`}><h2>{title}</h2> <div className='circleone'>{curr && <div className='circletwo'></div>}</div></div>
            <p className='plantext'>{text}</p> <p className='planpay'>{pay}</p>
            <div className='dollar'><h3>$</h3><h4>{digit}</h4></div>
            <p>a month</p>
            <h5>{contact}</h5>
    </div>
    </div>
  );
};

export default Plancard