import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { UserContext } from './shared/context';
import 'antd/dist/antd.css';
import { useEkko } from 'use-ekko';
import { Spin } from 'antd';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

export default function App() {
  const [user, setUser] = useEkko('user');

  return (
    <UserContext.Provider value={[user, setUser]}>
      <HashRouter>
        <React.Suspense fallback={<Spin />}>
          <Switch>
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    </UserContext.Provider>
  );
}
