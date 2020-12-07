import React, { useState, useEffect } from 'react';
import User from './User';

export default function Users(props) {
  //desestruturando a props
  const { users } = props;

  //instanciando o estado da aplicacao com useState
  const [secondsVisible, setSecondsVisible] = useState(0);

  //implementando o timeout com setInterval, utilizando useEffect
  useEffect(() => {
    //aqui instanciamos o efeito a ser executado
    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1)
    }, 1000);

    //neste retorno fazemos limpeza do efeito
    return () => {
      clearInterval(interval);
    }
  }, [secondsVisible]);

  return (
    <div>
      <p>Componente Users visivel por {secondsVisible} segundos</p>
      <ul>
        {users.map((user) => {
          //desestruturando
          const { login } = user;
          return( 
            <li key={login.uuid}>
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </div>
  )
}