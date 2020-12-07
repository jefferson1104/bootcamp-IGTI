import React from 'react';

import css from './counter.module.css';

export default function Steps(props) {
  const { steps } = props;
  return <span className={css.counterValue}>({steps})</span>;
}