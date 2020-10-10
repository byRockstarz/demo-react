import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Tomas from "./pages/Tomas";

function App() {
  return <Layout >
    <Switch>
      <Route exact={true} path="/" >
          <Home />
      </Route>
      <Route  path="/about" >
          <About />
      </Route>
      <Route path="/tomas">
        <Tomas />
      </Route>
    </Switch>
  </Layout>;
}

export default App;
