import React from "react";
import { ToastContainer } from 'react-toastify';
import 
  { 
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { InternalTemplate } from './components/InternalTemplate';
import { Home } from './pages/Home';
import { AddAppConfig } from './pages/AddAppConfig'

import 'react-toastify/dist/ReactToastify.css';
import './style/global.scss';

export default function App() {
  return (
    <Router>
      <Switch>
        <InternalTemplate>
          <ToastContainer />
          <Route exact path="/app">
            <AddAppConfig />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </InternalTemplate>
      </Switch>
    </Router>
  );
}