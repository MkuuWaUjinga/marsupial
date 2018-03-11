import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import Product from './components/product';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import GridList, { GridListTile,} from 'material-ui/GridList';
import opened from './resources/3.jpg';
import closed from './resources/1.jpg';


const tileData = [
    {
        img: opened,
        title: 'opened marsupial',
        author: 'Ad'
    },
    {
        img: closed,
        title: 'closed marsupial',
        author: 'Ad'
    }
];

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    subheader: {
        width: '100%',
    },
};


class App extends Component {
  render() {
    return (

            <div className="App">
                <MuiThemeProvider>
                <Header/>
                <br /> <br />
                    <div className={styles.root}>
                        <GridList cellHeight={'auto'} cols={2}>
                            {tileData.map(tile => (
                                <GridListTile key={tile.img} cols={1} rows={2}>
                                    <img src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <Product/>
                <br />
                <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </MuiThemeProvider>
            </div>

    );
  }
}

export default App;
