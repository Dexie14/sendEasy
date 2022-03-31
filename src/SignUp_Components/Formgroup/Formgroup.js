import './Formgroup.css';

const Formgroup = ({label, ...props}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input {...props} className="form-input" />
    </div>
  )
}

export default Formgroup