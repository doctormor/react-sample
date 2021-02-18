import React, { Component } from 'react'
import ReactDOM from "react-dom";
import ClientCaptcha from "react-client-captcha";

export default class Clientcaptcha extends Component {

    constructor(props) {
        super(props)
        this.state = {
            captchaCode: '',
            captchaInput: '',
        }

      }

      setCaptcha(code) {
          this.setState({ captchaCode: code});
      }

      validateCaptcha = () => {
        if (this.state.captchaCode === this.state.captchaInput) alert('Valid : ' + this.state.captchaInput)
        else alert('Invalid : ' + this.state.captchaInput)
      }

      changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
        const {
            captchaCode,
            captchaInput,
          } = this.state;
        return (
            <div>
                <ClientCaptcha captchaCode={code => this.setCaptcha(code)} />
                <input
                type="text"
                name="captchaInput"
                value={captchaInput}
                onChange={this.changeHandler}
                />
        <button onClick={this.validateCaptcha}>Validate</button>
            </div>
        )
    }
}
