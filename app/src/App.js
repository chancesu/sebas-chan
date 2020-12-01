import {useEffect} from 'react';
import splash from './splash.gif';
import './App.css';
import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Haptics } = Plugins;

function App() {

  useEffect(()=>{
    setInterval(()=>{
      Haptics.vibrate();
      console.log('징징');
    },3000)
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={splash} className="App-logo" alt="세바스chan" />
      </header>
    </div>
  );
}

export default App;
