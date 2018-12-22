import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import DatePicker from "react-datepicker";
import axios from 'axios'
import Home from './Home'
import Results from './Results'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      location: 'home',
      date: new Date(),
      data: '',
      btcToday: '',
      cryptoAmt: 1,
    }
    this.routingSys = this.routingSys.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
    this.onCryptoInputChange = this.onCryptoInputChange.bind(this);
  }

  componentDidMount() {
     axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${new Date().getTime()}&extraParams=crypto`)
      .then((response) => {
        this.setState({
          btcToday: response.data.BTC
        }, () => console.log(`componentDidMount: btcToday.USD: ${this.state.btcToday.USD}`))
      })
      .catch((err) => console.error(err))
  }

  // simple for prototype
  routingSys() {
    switch(this.state.location) {
      case 'home':
        // code
        return <Home handleDateChange={this.handleDateChange} globalState={this.state} onCryptoInputChange={this.onCryptoInputChange}/>
        break;
      case 'results':
        // code
        return <Results />
        break;
      default:
        // code
        return <Home />
    }
  }

  handleDateChange(date) {
    this.setState({
      date: date
    })
  }

  onCryptoInputChange(event) {
    this.setState({
      cryptoAmt: event.target.value
    })
  }

  apiCall() {
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${this.state.date.getTime() / 1000}&extraParams=crypto`)
      .then((response) => {
        this.setState({
          data: response.data.BTC
        }, () => {
          console.log(this.state)
          
          // price depending on date put, going by 1 BTC
          const costPrice = this.state.data.USD;
          console.log(`costPrice: ${costPrice}`);
          // amount of bitcoin
          let newCostPrice = (this.state.cryptoAmt * 100);
          console.log(`newCostPrice: ${newCostPrice}`);
          // $ of bitcoin, date bought
          newCostPrice = (newCostPrice * costPrice) / 100;
          console.log(`newCostPrice: ${newCostPrice}`);
          
          // price on present date
          const sellPrice = this.state.btcToday.USD;
          console.log(`sellPrice: ${sellPrice}`);
          // $ of bitcoin, present
          let newSellPrice = (this.state.cryptoAmt * 100);
          console.log(`newSellPrice: ${newSellPrice}`);
          newSellPrice = (newSellPrice * sellPrice) / 100;
          console.log(`newSellPrice: ${newSellPrice}`);

          if(newCostPrice < newSellPrice) {
            let differencePriceGain = newSellPrice - newCostPrice;
            differencePriceGain = differencePriceGain.toFixed(2);
            console.log(`differencePriceGain: ${differencePriceGain}`);

            let percentageGain = (differencePriceGain / newCostPrice) * 100;
            percentageGain = percentageGain.toFixed(2);
            console.log(`percentageGain: ${percentageGain}`);
            
            // console.log(`profit: $${differencePriceGain}, ${percentageGain}%`);
          }
          else {
            let differencePriceLoss = newCostPrice - newSellPrice;
            differencePriceLoss = differencePriceLoss.toFixed(2);
            console.log(`differencePriceLoss: ${differencePriceLoss}`);
            let percentageLoss = (differencePriceLoss / newCostPrice) * 100;
            percentageLoss = percentageLoss.toFixed(2);
            console.log(`percentageLoss: ${percentageLoss}`);
            
            // console.log(`loss: $${differencePriceLoss}, ${percentageLoss}%`);
          }
        })
      })
      .catch((err) => console.error(err))
  }

  render () {
    return (
      <div className='home'>
       <div className="container">
        <header>
          <div className="logo" onClick={this.apiCall}>
            crypto
          </div>

          <nav className="menu">
            <a href="#" className="main-btn">Sign Up</a>
          </nav>
        </header>
        {this.routingSys()}
       </div>
      </div>  
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
