import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Intro from '../Intro/Intro';
import Register from '../Register/Register';
import Info from '../Info/Info';

import tableRoutes from '../../utils/route-strings';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={tableRoutes.registration}>
            <Register />
          </Route>
          <Route path={tableRoutes.information}>
            <Info />
          </Route>
          <Route path={tableRoutes.home}>
            <Intro />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
