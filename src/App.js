import React from 'react';
import './App.css';

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';

import { ShellLayout } from "./ShellLayout";
import { ObjectPLayout } from "./ObjectPLayout";

function App() {

  return <HashRouter>
    <ThemeProvider>
      <Switch>
        <Route path="/shell" component={ShellLayout} />
        <Route path="/object" component={ObjectPLayout} />
        <Redirect from="/" to="/object" />
      </Switch>
    </ThemeProvider>
  </HashRouter>;
}

export default App;
