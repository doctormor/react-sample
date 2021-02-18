import React, { Component } from "react";
import axios from "axios";
import withRequest from "../lib/withRequest";

class Post extends Component {
  constructor() {
    super();
    //console.log("constructor");
  }

  //   state = {
  //     data: [],
  //   };

  //   async componentDidMount() {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     this.setState({ data: result.data });
  //   }

  onChange = (event) => {
    this.props.onNameChange(event.target.value);
  };

  render() {
    // const { name } = this.props;

    //console.log("render");
    return (
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <td>User ID</td>
                <td>Id</td>
                <td>Title</td>
                <td>Body</td>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((user) => (
                <tr key={user.id}>
                  <td>{user.userId}</td>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRequest("https://jsonplaceholder.typicode.com/posts")(Post);
