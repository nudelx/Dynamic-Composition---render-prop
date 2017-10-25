import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StepOne from './Steps/StepOne'
import StepTwo from './Steps/StepTwo'
import StepThree from './Steps/StepThree'
import StepFour from './Steps/StepFour'
import DCCWindow from './DCC/DynamicCompositionComponent'
import WideWindow from './components/wideWindow'

const Test = (params) => {
  return (<div>{JSON.stringify(params)}</div>)
}

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {/* <StepOne /> */}
        {/* <StepTwo /> */}
        {/* <StepThree /> */}
        {/* <StepFour /> */}

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
            coolStuff => (
              <div>
                <WideWindow {...coolStuff} />
              </div>
            )
          }
        </DCCWindow> */}

      </div>
    );
  }
}

export default App;
