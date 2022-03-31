import './Touchcard.css';


const Touchcard = ({image , title, text, css, csss}) => {
  return (
    <div className={`touchcard ${css}`}>
        <div className="Touchimage">
            <img className={csss} src={image} alt="emailM" />
        </div>
        <div className="Touchtext">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  );
};

export default Touchcard