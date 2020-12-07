import React from 'react';

import css from './user.module.css';

export default function Users(props) {  
  //desestruturando a props
  const { name, picture } = props.user;
  
  return (
    <div className={css.flexRow}>
      <img className={css.avatar} src={picture.large} alt={name.first}/>
      <span>{name.first}</span>
    </div>
  );
}