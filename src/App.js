import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Hardware from "./pages/hardware";
import Users from "./pages/users";
import User from "./pages/user";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/hardware">
          <Hardware />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
