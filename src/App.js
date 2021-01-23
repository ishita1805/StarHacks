import React,{ useState } from 'react'
import Landing from './containers/landing/Landing'
import Navigation from './components/navigation/Navigation'
import Home from './containers/home/Home'
import Account from './containers/account/Account'
import SafeSpace from './containers/safeSpace/SafeSpace'
import MindMap from './containers/monitor/Monitor'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(true); 

  return (
      <Router>
        {!isAuth?
        <Landing/>:
        <Navigation>
             <Route path="/" component={Home} exact/>
             <Route path="/Account" component={Account} exact/>
             <Route path="/SafeSpace" component={SafeSpace} exact/>
             <Route path="/MindMonitor" component={MindMap} exact/>
        </Navigation>
        }
        
      </Router>
  );
}

export default App;
