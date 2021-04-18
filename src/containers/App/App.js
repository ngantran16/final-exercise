import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';

import Intro from '../Intro/Intro';
import Register from '../Register/Register';
import ConfirmOTP from '../Register/ConfirmOTP';
import Info from '../Info/Info';
import Search from '../Map/Search';
import tableRoutes from '../../utils/route-strings';
import Contact from '../../containers/Contact/Contact';

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
          <Route path={tableRoutes.confirm}>
            <ConfirmOTP />
          </Route>
          <Route path={tableRoutes.search}>
            <Search />
          </Route>
          <Route path={tableRoutes.contact}>
            <Contact />
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
