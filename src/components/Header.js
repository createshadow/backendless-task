import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="App-header">
            <nav className="App-navigation">
                <Link to='/'>Dummy Table</Link>
                <Link to='/dummyChart'>Dummy Chart</Link>
                <Link to='/dummyList'>Dummy List</Link>
            </nav>
        </header>
    )
};

export default Header;