import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Hardware from "./pages/hardware";
import Users from "./pages/users";
import User from "./pages/user";
import Album from "./pages/album";

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
        <Route exact path="/user/:userId">
          <User />
        </Route>
        <Route path="/user/:userId/album/:albumId">
          <Album />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
