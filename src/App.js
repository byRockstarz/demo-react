import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Hardware from './pages/hardware'

const App = () => {
return <Layout >
    <Switch>
      <Route exact={true} path="/" >
          <Home />
      </Route>
      <Route  path="/hardware" >
          <Hardware />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
