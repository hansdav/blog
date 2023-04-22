import './Popup.css';

function Popup(props) {
  return (
    <div className='popup-field'>
      <div className='popup-header'>
        <div className='popup-title'>
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className='popup-author'>By: {props.author}</div>
      <div className='popup-date'>Date: {props.date}</div>
      <br />
      <br />
      <div className='popup-content'>{props.post}</div>
      <br />
      <br />
      <button className='popup-close' onClick={props.onClose}>
        X
      </button>
    </div>
  );
}

export default Popup;
