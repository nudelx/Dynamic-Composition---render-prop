import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyShare from './components/MysharedComponent'
import WithSnow from './components/WithSnow'
import Window from './components/Window'
import EnhanceWindow from './HOC/enhanceWindow'
import DCCWindow from './DCC/DynamicCompositionComponent'
import PortHole from './components/Porthole'
import WideWindow from './components/wideWindow'

const Test = (params) => {
  return (<div>{JSON.stringify(params)}</div>)
}

const WindowWithSnow = EnhanceWindow(Window)
const PortHoleWithSnow = EnhanceWindow(PortHole)
const WideWindowWithSnow = EnhanceWindow(WideWindow)

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

        {/* <Window /> */}

        {/* <WindowWithSnow />
        <PortHoleWithSnow />
        <WideWindowWithSnow /> */}

        {/* <DCCWindow>
          {
            coolStuff => (<WideWindow {...coolStuff} />)
          }
        </DCCWindow> */}

      </div>
    );
  }
}

export default App;
