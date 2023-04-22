import './Popup.css';
import { useState } from 'react';

function Popup(props) {
  console.log(props.id);

  const [currentLikes, setCurrentLikes] = useState(props.likes);

  fetch(`http://localhost:5050/api/blogs/${props.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      likes: currentLikes,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  const handleLike = () => {
    setCurrentLikes(currentLikes + 1);
  };

  return (
    <div className='popup-field' key={props._id}>
      <div className='popup-header'>
        <div className='popup-buttons'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              onClick={handleLike}
              alt='like-icon'
              className='like-icon'
              width='40px'
              height='40px'
              src='https://cdn-icons-png.flaticon.com/512/541/541415.png'
            />
            {currentLikes}
          </div>
          <button className='update-button'>Update Blog</button>
        </div>
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
