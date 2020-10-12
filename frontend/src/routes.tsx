import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import OrphanagesMap from './components/OrphanagesMap';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Landing}/>
            <Route path = '/map' component={OrphanagesMap}/>
        </BrowserRouter>
    )
}

export default Routes;