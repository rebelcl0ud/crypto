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
    }
    this.routingSys = this.routingSys.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount() {
     axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${new Date().getTime()}&extraParams=crypto`)
      .then((response) => {
        this.setState({
          btcToday: response.data.BTC
        }, () => console.log(this.state.btcToday.USD))
      })
      .catch((err) => console.error(err))
  }

  // simple for prototype
  routingSys() {
    switch(this.state.location) {
      case 'home':
        // code
        return <Home handleDateChange={this.handleDateChange} globalState={this.state}/>
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
    }, () => console.log(this.state.date.getTime()))
  }

  apiCall() {
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=1452680400&extraParams=crypto`)
      .then((response) => {
        this.setState({
          data: response.data.BTC.USD
        }, () => {
          console.log(this.state.data)
          // price depending on date put
          const costPrice = this.state.data;
          // price on present date
          const sellPrice = this.state.btcToday.USD;

          if(costPrice < sellPrice) {
            let differencePriceGain = sellPrice - costPrice;
            let percentageGain = (differencePriceGain / costPrice) * 100;
            percentageGain = percentageGain.toFixed(2);
            
            console.log(`profit: $${differencePriceGain}, ${percentageGain}%`);
          }
          else {
            let differencePriceLoss = costPrice - sellPrice;
            let percentageLoss = (differencePriceLoss / costPrice) * 100;
            percentageLoss = percentageLoss.toFixed(2);
            
            console.log(`loss: $${differencePriceLoss}, ${percentageLoss}%`);
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
