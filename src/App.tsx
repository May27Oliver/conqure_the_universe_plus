import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./container/Homepage";
import NewsPage from "./container/NewsPage";
import VideoPage from "./container/VideoPage";
import VotePage from "./container/VotePage";
import MemberPage from "./container/MemberPage";
import ShoppingPage from "./container/ShoppingPage";

const App: React.FC = () => {
  return (
    <div className="App w-full">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/NewsPage" component={NewsPage} />
          <Route exact path="/VideoPage" component={VideoPage} />
          <Route exact path="/VotePage" component={VotePage} />
          <Route exact path="/MemberPage" component={MemberPage} />
          <Route exact path="/ShoppingPage" component={ShoppingPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
