import React, { useState } from 'react';
import Counter from './components/Counter/Counter';
import Counter2 from './components/Counter/Counter2';
import Band from './components/Band';

import css from './custom.module.css';

export default function App() {
  //estados da aplicacao
  const [currentCounter, setCurrentCounter] = useState(3);
  const [steps, setSteps] = useState(0);

  const handleCount = (clickType) => {
    const counter = clickType === '+' ? currentCounter + 1 : currentCounter - 1

    setCurrentCounter(counter);

    setSteps( steps + 1);
  };

  return (
    <div className={css.content}>
      <div className={css.stateExample}>
        <h3>Exemplo useState()</h3>
        <span>
          Exemplo de componente utilizando gerenciamento de estado com o 
          react hooks <strong>useState()</strong>
        </span>
        <Band />
      </div>

      <div className={css.counter}>
        <h3>Contador 01</h3>
        <span>
          Exemplo de componente com gerenciamento de estado
          <strong> Isolado</strong> utilizando react hooks useState()
        </span>
        <Counter />
        <Counter />
        <Counter />
      </div>

      <div className={css.counter}>
        <h3>Contador 02</h3>
        <span>
          Exemplo de componente com gerenciamento de estado
          <strong> Compartilhado</strong> utilizando react hooks useState()
        </span>
        <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={steps} />
        <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={steps} />
        <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={steps} />
      </div>
    </div>
  );
}
