import './MiniBlog.css';
import React, { useState, useEffect } from 'react';
import Popup from '../Popup/Popup';

const MiniBlog = ({ title, author, date, post, likes, id }) => {
  const [showPopup, setShowPopup] = useState(false);

  function handleTitleClick() {
    setShowPopup(true);
  }

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className='container'>
      {showPopup ? (
        <Popup
          title={title}
          author={author}
          date={date}
          post={post}
          likes={likes}
          id={id}
          onClose={handlePopupClose}
        />
      ) : null}
      <div>
        <img
          className='wallpaper'
          style={{ width: '20%' }}
          src='../src/assets/office-table-with-cup-coffee-keyboard-notepad.jpg'
        ></img>
        <div onClick={handleTitleClick} className='title'>
          {title}
        </div>
        <div className='author'>By: {author}</div>
        <div className='date'>Date: {date}</div>
        <div className='text-content'>{post}</div>
      </div>
    </div>
  );
};

export default MiniBlog;
