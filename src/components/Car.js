import React from 'react';
import carImg from '../car.svg';

const Car = (props) => {
  return (
    <img
      style={{ backgroundColor: props.color, marginTop: '20px' }}
      src={carImg}
    />
  );
};

export default Car;
