import React, {Component} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';


import DummyTable from './tabs/DummyTable'
import DummyChart from './tabs/DummyChart';
import DummyList from './tabs/DummyList';

const Content = () => {
    return (
        <section>
            <Switch>
                <Route exact={true} path='/dummyTable' render={() =>
                    <Redirect from="/" to="/dummyTable"/>} component={DummyTable}/>
                <Route path='/dummyChart' component={DummyChart} />
                <Route path='/dummyList' component={DummyList} />
            </Switch>
        </section>
    )
};

export default Content;


const Tabs = [
    {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
    {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
    {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
];