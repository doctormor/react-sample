import React, { Component } from "react";
import { render } from "@testing-library/react";
import axios from "axios";

//higer order component

export default (url) => (WrappedComponent) =>
  class extends Component {
    state = {
      data: [],
    };

    async componentDidMount() {
      const result = await axios.get(url);
      this.setState({ data: result.data });
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  };
