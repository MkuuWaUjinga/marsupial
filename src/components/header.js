import React, { Component } from 'react';
import kangaroo from './../kangaroo.svg';
import "typeface-bungee-inline";
import Typography from 'material-ui/Typography';

const style = {
    fontFamily: 'bungee inline',
    fontSize: '80px',
    color: 'white'
};

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={kangaroo} className="App-logo" alt="kangaroo"/>
                <Typography style={style} variant="display4">
                    Marsupial
                </Typography>
            </header>
        );
    }
}

export default Header;