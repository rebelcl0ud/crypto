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
    const {costPrice, 
          newCostPrice,
          sellPrice, 
          newSellPrice, 
          percentageGain,
          differencePriceGain,
          differencePriceLoss,
          percentageLoss} = this.props.globalState.total;

    return (
      <section id='results'>
       <div className="container">
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
        <div className="col-md-12">
          <h1>Your ${newCostPrice} investment is now worth...</h1>
          <h2>${newSellPrice}</h2>
          {percentageGain ? (
            <h3>You Made {percentageGain}% Profit</h3>
          ) : (
            <h3>There was {percentageLoss}% loss from initial investment</h3>
          )}
          
          <a href="#" className="main-btn active">Create Account to track transaction history</a>
          <a href="#" className="main-btn" onClick={this.props.goBackButton}>Check another transaction</a>
        </div>
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
       </div>
      </section>  
    )
  }
}