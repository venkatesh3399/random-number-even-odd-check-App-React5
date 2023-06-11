import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {num: 0}

  onIncrement = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState({num: newNum})
  }

  getNumType = () => {
    const {num} = this.state
    return num % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {num} = this.state
    return (
      <div className="overall-bg-container">
        <div className="bg-container">
          <h1 className="heading">Count {num}</h1>
          <p className="para">Count is {this.getNumType()}</p>
          <div>
            <button type="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
