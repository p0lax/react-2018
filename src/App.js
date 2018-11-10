import React, { Component } from 'react';
import MainPage from './pages/MainPage';
import styles from './App.module.scss';

class App extends Component {
  render() {
    
    return (
      <div className={styles.app}>
        <MainPage />
      </div>
    );
  }
}

export default App;
