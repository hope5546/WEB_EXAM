import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route,NavLink} from 'react-router-dom'; 
import routes from './routing-config';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>

               <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
               <li><NavLink to="/Home2" activeClassName="active">Home2</NavLink></li>


              {/*<li><NavLink to="/Input" activeClassName="active">Input</NavLink></li>

              <li><NavLink to="/level11/:value" activeClassName="active">Output</NavLink></li>*/}
              
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              {/*
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/BasicRouting" component={BasicRouting} />
                        <Route path="/Blocking" component={Blocking} />
                        <Route path="/Miss" component={Miss} />
                        <Route path="/QueryParams" component={QueryParams} />
                        <Route path="/Recursive" component={Recursive} />
                        <Route path="/login" component={Login} />
                        <Route path="/Protected" component={
                          () => (fakeAuth.isAuthenticated ?
                            (<ProtectedPage />) :
                            (<Redirect to={{pathname: "/login", state: {from: "/Protected"}}}/> ))} />
              */}
                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
