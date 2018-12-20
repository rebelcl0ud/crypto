import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './home'

class Layout extends Component {
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
      <div className='home'>
       <div className="container">
        <header>
          <div className="logo">
            crypto
          </div>

          <nav className="menu">
            <a href="#">Sign Up</a>
          </nav>
        </header>
        <Home />
       </div>
      </div>  
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
