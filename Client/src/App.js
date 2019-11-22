import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer1 from "./Components/Footer/Footer1";
import routes from "./Components/routes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import { useRoutes } from "hookrouter";
import "./App.css";
import httpClient from "./httpClient";
import Home from "./Components/Home/index";
import Products from "./Components/Products/index";
import Contacts from "./Components/Contacts/index";
import LogIn from "./Views/Login";
import LogOut from "./Views/Logout";
import SignUp from "./Views/Signup";
import RTH from "./Views/Rth";

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }
  render() {
    // const routeResult = useRoutes(routes);
    const { currentUser } = this.state;
    return (
      <div>
        <Router>
          <Navbar currentUser={currentUser} />
          <Switch>
            <Route
              path="/login"
              render={props => {
                return (
                  <LogIn
                    {...props}
                    onLoginSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />

            <Route
              path="/logout"
              render={props => {
                return <LogOut onLogOut={this.logOut.bind(this)} />;
              }}
            />

            {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
            <Route
              path="/signup"
              render={props => {
                return (
                  <SignUp
                    {...props}
                    onSignUpSuccess={this.onLoginSuccess.bind(this)}
                  />
                );
              }}
            />

            <Route
              path="/rth"
              render={() => {
                return currentUser ? <RTH /> : <Redirect to="/login" />;
              }}
            />

            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Products} />
            <Route exact path="/Contacts" component={Contacts} />
          </Switch>

          <Footer1 />
        </Router>
      </div>
    );
  }
}

export default App;
