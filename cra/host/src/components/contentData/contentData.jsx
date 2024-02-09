import React from 'react';
import './contentData.css';

function ContentData({ title, name, text }) {
  return (
    <div className="custom-component">
      <h2>{title}</h2>
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ContentData;

