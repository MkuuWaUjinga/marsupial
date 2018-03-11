import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import ProductDescription from './components/product'

class App extends Component {
  render() {
    return (

            <div className="App">
                <MuiThemeProvider>
                <Header/>
                <br /> <br />
                <ProductDescription/>
                <br />
                <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </MuiThemeProvider>
            </div>

    );
  }
}

export default App;
