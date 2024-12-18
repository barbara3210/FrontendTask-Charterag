import React from 'react';
import './button.css';

export default function YButton({ text, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {text}
    </button>
  );
}


  