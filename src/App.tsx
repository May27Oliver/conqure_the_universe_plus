import React from "react";
import logo from "./logo.svg";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./container/Homepage";
import ActivityPage from "./container/ActivityPage";
import DissPage from "./container/DissPage";
import RankPage from "./container/RankPage";

const App: React.FC = () => {
  return (
    <div className="App w-full">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/ActivityPage" component={ActivityPage} />
          <Route exact path="/DissPage" component={DissPage} />
          <Route exact path="/RankPage" component={RankPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
