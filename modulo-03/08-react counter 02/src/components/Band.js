import React, { useState } from 'react';

//instanciando 
const BAND_MEMBERS = [
  {
    id: 1,
    name: 'Chester Bennington',
    instrument: 'Vocal',
  },
  {
    id: 2,
    name: 'Mike Shinoda',
    instrument: 'Vocal & Multi-instrumentista',
  },
  {
    id: 3,
    name: 'Brad Delson',
    instrument: 'Guitarra',
  },
  {
    id: 4,
    name: 'Dave Farrell',
    instrument: 'Baixo',
  },
  {
    id: 5,
    name: 'Rob Bourdon',
    instrument: 'Bateria',
  },
  {
    id: 6,
    name: 'Joe Hahn',
    instrument: 'DJ',
  },
];

export default function Band() {
  //estados da aplicacao
  const [bandMembers, setBandMembers] = useState(BAND_MEMBERS);
  const [bandName, setBandName] = useState('Linkin Park');
  
  return (
    <div>
      <h4>{bandName}</h4>
      <ul>
      {bandMembers.map(({ id, name, instrument }) => {
        return (
          <li key={id}>{name} - {instrument}</li>
        );
      })}
      </ul>
    </div>      
  )
}