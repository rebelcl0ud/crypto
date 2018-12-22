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
    }
    this.routingSys = this.routingSys.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  componentDidMount() {
     axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=${new Date().getTime()}&extraParams=crypto`)
      .then((response) => {
        this.setState({
          btcToday: response.data.BTC
        }, () => console.log(this.state.btcToday))
      })
      .catch((err) => console.error(err))
  }

  // simple for prototype
  routingSys() {
    switch(this.state.location) {
      case 'home':
        // code
        return <Home handleChange={this.handleChange} globalState={this.state}/>
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

  handleChange(date) {
    this.setState({
      date: date
    }, () => console.log(this.state.date.getTime()))
  }

  apiCall() {
    axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=1513294607000&extraParams=crypto`)
      .then((response) => {
        this.setState({
          data: response.data.BTC
        }, () => console.log(this.state.data))
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
