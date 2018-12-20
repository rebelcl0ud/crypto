import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Results extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <section id='results'>
       <div className="container">
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
        <div className="col-md-12">
          <h1>Your $ investment is now...</h1>
          <h2>$ RESULT</h2>
          <h3>You Made #% Profit</h3>
          <a href="#" className="main-btn active">Create Account to track transaction history</a>
        </div>
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
       </div>
      </section>  
    )
  }
}