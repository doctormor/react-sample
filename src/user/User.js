import React, { Component } from "react";
import axios from "axios";
import withRequest from "../lib/withRequest";

class User extends Component {
  constructor() {
    super();
    //console.log("constructor");
  }

  //   state = {
  //     data: [],
  //   };

  //   async componentDidMount() {
  //     //console.log("componentDidMount");
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     this.setState({ data: result.data });
  //   }

  onChange = (event) => {
    //console.log(event.target.value);
    this.props.onNameChange(event.target.value);
  };

  render() {
    // const { name } = this.props;

    //console.log("render");
    return (
      <div>
        <div>{/* <input type="text" onChange={this.onChange} /> */}</div>
        <div>
          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {this.props.data === undefined ? (
                <div />
              ) : (
                this.props.data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default User;
