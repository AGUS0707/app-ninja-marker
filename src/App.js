import React from 'react';
import Home from "./components/home";
import "./css/app.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Market from "./components/market";
function App() {
  return (
    <div>
     <Router>
         <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/market-page" component={Market}/>
         </Switch>
     </Router>
    </div>
  );
}

export default App;
