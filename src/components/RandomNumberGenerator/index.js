// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onClicKGenerator = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div className="card">
          <h1 className="heading"> Random Number</h1>
          <p className="para">
            Generate a Random Number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClicKGenerator}
          >
            Generate
          </button>
          <p> {count} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
