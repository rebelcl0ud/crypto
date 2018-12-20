import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
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
      <section id='home'>
       <div className="container">
        <div className="col-md-6">
          <img className="bitcoin-logo" src="/img/bitcoin21.png"/>
        </div>
        
        <div className="form col-md-6">
          <h1>Enter Transaction</h1>

          <label>Amount</label>
          <input type="text" name="amount" placeholder="$"/>
          
          <label>Date</label>
          <input type="text" name="date"/>
          
          <button type="submit">Check Profit</button>
        </div>
       </div>
      </section>  
    )
  }
}

