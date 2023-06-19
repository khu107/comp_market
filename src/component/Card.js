import React from 'react';

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.shoes.img} width="80%" alt="rasm" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Card;
