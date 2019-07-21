import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Home from './components/HomePage/home';
import ArtistPage from './components/ArtistPage/artistPage';

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/artist/:id" component={ArtistPage}/>
            </Switch>
        </Router>
    )
}

export default Routes;