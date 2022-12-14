import React from 'react';
import style from './index.module.less';

function GlobalHeader() {
  return (
    <div className={style['global-header']}>
      <span className={style['title-logo']}>
        <span className={style['text-i']}>i</span>
        <span className={style['text-todo']}>Todo</span>
      </span>
    </div>
  );
}

export default React.memo(GlobalHeader);