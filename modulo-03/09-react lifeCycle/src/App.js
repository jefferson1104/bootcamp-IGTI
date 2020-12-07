import React, { useState, useEffect } from 'react';
import Toggle from './components/Toggle/Toggle';
import Users from './components/Users/Users';

export default function App() {
  //instanciando o estado da aplicacao com useState()
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);


  //exibindo os usuarios, utilizando o useEffect()
  useEffect(() => {
    //aqui colocamos o codigo do qual queremos que tenha efeito
    const fetchUsers = async () => {
      const res = await fetch(
        'https://randomuser.me/api/?seed=rush&nat=br&results=10'
      );

      const json = await res.json();
      setUsers(json.results);
    };

    //executando 
    fetchUsers();
  }, [])


  //funcao botao checked
  const handleShowUsers = (isChecked) => {
    setShowUsers(isChecked);
    //this.setState({ showUsers: isChecked });
  }

  
  return (
    <div>
      <h3>React Life Cycle</h3>
      <Toggle 
        description="Mostrar usuarios:" 
        enabled={showUsers} 
        onToggle={handleShowUsers}       
      />

      <hr/>
      {showUsers && <Users users={users}/>}
    </div>
  )
}

