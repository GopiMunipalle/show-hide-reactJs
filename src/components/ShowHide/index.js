// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirst: false, showLast: false}

  onShowFirst = () => {
    this.setState(prevState => ({showFirst: !prevState.showFirst}))
  }

  onShowLast = () => {
    this.setState(prevState => ({showLast: !prevState.showLast}))
  }

  render() {
    const {showFirst, showLast} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="button-container">
            <button className="button" type="button" onClick={this.onShowFirst}>
              Show/Hide FirstName
            </button>
            {showFirst && <p className="hide-button">Joe</p>}
          </div>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onShowLast}>
              Show/Hide LastName
            </button>
            {showLast && <p className="hide-button">jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
