import React, { Component} from 'react'
import ReactDOM from 'react-dom'

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
        HomePage
        <div className="col-md-offset-4 col-md-6">
          <div className="box-1">

          </div>
        </div>
      </div>  
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
