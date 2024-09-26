// ButtonComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonComponent = ({ text, destination }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(destination);
  };

  return (
    <button className='button' onClick={handleClick}>
      {text}
    </button>
  );
};
export default ButtonComponent;