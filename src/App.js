import React from 'react';

import './App.css';
import userIcon from './user.png';

import { ActionMenu } from './components/ActionMenu';
import { NavigationMenu } from './components/NavigationMenu';
import { DisplayItem } from './components/DisplayItem';
import { StatusBar } from './components/StatusBar';

const App = () => {
  const textareaRef = React.createRef();
  return (
    <div className="App">
      <div className="container">
        <header className="App_header">
          <h1>Тестовое задание</h1>
          <button className="login-btn" onClick={() => console.log('login')}>
            <img src={userIcon} className="login-btn_logo" alt="userLogo" />
          </button>
        </header>
        <main>
          <ActionMenu textareaRef={textareaRef} />
          <section className="App_content">
            <NavigationMenu />
            <DisplayItem ref={textareaRef} />
          </section>
          <StatusBar />
        </main>
      </div>
    </div>
  );
};

export default App;
