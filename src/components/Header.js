import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as dataFromJSON from '../tabs.json'

class Header extends Component {
    constructor(){
        super();

        this.state = {
            tabs: []
        }
    }

    componentWillMount(){
        this.imitateDataLoader()
            .then(tabs => this.setState({tabs}))
            .catch(error => console.log(error));
    }

    imitateDataLoader = () => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve(dataFromJSON), 500)
        })
    };

    render () {
        let {tabs} = this.state;
        return (
            <header className="App-header">
                <nav className="App-navigation">
                    {tabs.length ?
                        tabs.map((tab, idx) => <Link to={tab.id} key={idx}>{tab.title}</Link>)
                        : <p>No tabs exist</p>}
                </nav>
            </header>
        )
    }
}

export default Header;