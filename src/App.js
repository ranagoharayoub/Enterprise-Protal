import './App.css';
import Accounts from './Screens/Accounts';
import CompanyProfile from './Screens/CompanyProfile';
import CreateAccount from './Screens/CreateAccount';
import Login from './Screens/Login';
import Order from './Screens/Order';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useState } from 'react';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <div className="App">
      <Router>
        {
          isLoggedIn? <Redirect to = '/accounts'></Redirect> : <Redirect to='/login'></Redirect>
        }
        <Switch>
          <Route path='/login'><Login login={()=> setisLoggedIn(true)}></Login></Route>
          <Route path='/accounts'><Accounts></Accounts></Route>
          <Route path='/newaccount'> <CreateAccount></CreateAccount></Route>
          <Route path='/order'><Order></Order></Route>
          <Route path='/settings'><CompanyProfile></CompanyProfile></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
