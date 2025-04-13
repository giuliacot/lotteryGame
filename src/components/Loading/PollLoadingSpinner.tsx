import React from 'react';
import style from './PollLoadingSpinner.module.scss';

const PollLoadingSpinner: React.FC = () => {
  return (
    <div className={style["poll-loading-spinner"]}>
      <span className={style.dot}></span>
      <span className={style.dot}></span>
      <span className={style.dot}></span>
    </div>
  );
};

export default PollLoadingSpinner;