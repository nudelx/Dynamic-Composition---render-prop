import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyShare from './components/MysharedComponent'
import WithSnow from './components/WithSnow'
import Window from './components/Window'
import EnhanceWindow from './HOC/enhanceWindow'


const Test = (params) => {
  return (<div>{JSON.stringify(params)}</div>)
}

const WindowWithSnow = EnhanceWindow(Window)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* <MyShare>
          {state => (<Test state={state} {...{test:'alex'}}/>) }
        </MyShare>

        <WithSnow>
          {'test'}
        </WithSnow> */}
        {/* <Window/>
        <Window/>
        <Window/>
        <Window/> */}

        <WindowWithSnow />
      </div>
    );
  }
}

export default App;
