import React, { Component } from "react";
import "./App.css";
import User from "./user/User";
import Post from "./post/Post";
import Main from "./home/Main";
import Captchaform from "./home/Captchaform";
import Clientcaptcha from "./home/Clientcaptcha";
import Formpost from "./post/Formpost";
import Uploadfiles from "./upload/Upload";
import Registration from "./auth/Registration";
import { Route, Link, Redirect } from "react-router-dom";
import Request from "./lib/Request";
import { Nav, NavItem, NavLink } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    let page = true;

    this.state = {
      name: "Flow Digital",
      page,
    };
  }

  onNameChange = (name) => {
    this.setState({ name: name });
  };

  render() {
    const { page, name } = this.state;

    return (
      <div className="App">
        <div>Hello {name}</div>
        <div>
          <p>List Based</p>
          <Nav>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/registration">Registration</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/users">Users</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/posts">Posts</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/formpost">Post to api</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/upload">Upload files</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/captchaform">Show reCaptcha</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/clientcaptcha">Show clientcaptcha</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <hr />
        </div>
        <Route exact path="/">
          {page ? <Redirect to="/main" /> : <Main />}
        </Route>
        <Route path="/main" component={Main} />
        <Route path="/registration" component={Registration} />
        <Route
          path="/users"
          component={() => (
            <Request url="https://jsonplaceholder.typicode.com/users">
              {(data) => <User data={data} />}
            </Request>
          )}
        />
        <Route path="/posts" component={Post} />
        <Route path="/formpost" component={Formpost} />
        <Route path="/upload" component={Uploadfiles} />
        <Route path="/captchaform" component={Captchaform} />
        <Route path="/clientcaptcha" component={Clientcaptcha} />

        {/* <Route path="/users" component={User}></Route>
        <Route path="/posts" component={Post}></Route> */}
        {/* <User name={name} onNameChange={this.onNameChange} />
        <Post /> */}
      </div>
    );
  }
}

export default App;
