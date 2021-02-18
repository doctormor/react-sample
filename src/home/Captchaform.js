import React, { Component } from "react";
import RCG from 'react-captcha-generator';

class Captchaform extends Component {
    constructor(props) {
        super(props)
        this.state = {
          captcha: ''
        }
        this.check = this.check.bind(this)
        this.result = this.result.bind(this)
        this.handleClick = this.handleClick.bind(this)
      }
    
    render() {
        return (
            <div className="App">
                <RCG result={this.result} />
        <form onSubmit={this.handleClick}>
          <input type='text' className={'xxx'} ref={ref => this.captchaEnter = ref} />
          <input type='submit' />
        </form>
        
      </div>
        )
    }

    handleClick(e) {
        e.preventDefault();
        this.check()
      }
     
      result(text) {
        this.setState({
          captcha: text
        })
      }
      
      check() {
        console.log(this.state.captcha, this.captchaEnter.value, this.state.captcha === this.captchaEnter.value)
      }
}

export default (Captchaform);
