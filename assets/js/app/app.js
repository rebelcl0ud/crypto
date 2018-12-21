import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import Results from './Results'
import DatePicker from "react-datepicker";

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      location: 'home',
      date: new Date(),
    }
    this.routingSys = this.routingSys.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    });
  }

  render () {
    return (
      <div className='home'>
       <div className="container">
        <header>
          <div className="logo">
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
