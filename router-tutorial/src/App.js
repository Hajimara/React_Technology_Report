import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/profiles'>profiles</Link>
        </li>
        <li>
          <Link to='/history'>history</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path='/profiles' component={Profiles} />
        <Route path='/history' component={HistorySample} />
        {/* path를 따로 정의하지 않으면 모든 상황에 렌더링 된다. */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다.</h2>
              <p>{location.pathname}</p>
            </div>)

          }></Route>
      </Switch>
    </div>
  );
}

export default App;
