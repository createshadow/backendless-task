import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DummyTable from './tabs/DummyTable'
import DummyChart from './tabs/DummyChart';
import DummyList from './tabs/DummyList';

const Content = () => {
    return (
        <section className="App-content">
            <Switch>
                <Route exact path="/" render={() => <Redirect from="/" to="/dummyTable"/>}/>
                <Route path='/dummyTable' component={DummyTable}/>
                <Route path='/dummyChart' component={DummyChart} />
                <Route path='/dummyList' component={DummyList} />
            </Switch>
        </section>
    )
};

export default Content;
