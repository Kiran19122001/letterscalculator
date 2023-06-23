import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {letters: 0}

  onTyping = event => {
    const typedLetters = event.target.value
    this.setState({letters: typedLetters.length})
  }

  render() {
    const {letters} = this.state
    return (
      <div className="cont-1">
        <div className="cont-2">
          <div className="box-1">
            <div className="cont-3">
              <h1 className="head">Calculate the Letters you enter</h1>
            </div>
            <label className="para" htmlFor="myInput">
              Enter the phrase
            </label>
            <div className="cont-4">
              <input
                type="text"
                className="box"
                placeholder="Enter the phrase"
                onChange={this.onTyping}
                id="myInput"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                alt="letters calculator"
                className="image"
              />
            </div>
            <p className="letters">No.of letters: {letters}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
