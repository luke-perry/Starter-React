import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import Sample from './components/sample/Sample'

const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Sample} />
        </Switch>
    </Router>
)

export default hot(AppRouter)
