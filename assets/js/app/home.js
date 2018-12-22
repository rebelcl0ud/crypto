import React, { Component} from 'react'
import ReactDOM from 'react-dom'
// https://github.com/Hacker0x01/react-datepicker
import DatePicker from "react-datepicker";

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
          <input type="text" name="amount" placeholder="# of Bitcoin" 
            value={this.props.globalState.cryptoAmt} 
            onChange={this.props.onCryptoInputChange}/>
          
          <label>Date</label>
          <DatePicker 
            selected={this.props.globalState.date}
            onChange={this.props.handleDateChange}
          />
          <button type="submit" onClick={this.props.checkProfit}>Check Profit</button>
        </div>
       </div>
      </section>  
    )
  }
}

