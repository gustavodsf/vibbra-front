import React from "react";
import 
  { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { InternalTemplate } from './components/InternalTemplate';

import './style/global.scss';

export default function App() {
  return (
    <InternalTemplate>
      <Router>
        <Switch>
          
        </Switch>
      </Router>
    </InternalTemplate>
  );
}