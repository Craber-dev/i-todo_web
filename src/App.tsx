import React from 'react';
import style from './App.module.less';
import DevTag from '@/components/DevTag';
import GlobalHeader from '@/containers/GlobalHeader';
import Home from '@/pages/Home';

import '@/assets/style/reset.css';

function App (): React.ReactElement {
  return (
    <div className={style.App}>
      <DevTag text="React-本地开发" position="right-top" />
      <div className={style.header}>
        <GlobalHeader />
      </div>
      <div className={style.body}>
        <Home />
      </div>
    </div>
  );
}

export default App;
