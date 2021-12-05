// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimeRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (timeElapsedInSeconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimeRunning: true})
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false})
  }

  onClickReset = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimeRunning: false, timeElapsedInSeconds: 0})
  }

  render() {
    const {isTimeRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="bg-card">
          <div className="card-items">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1>{time}</h1>
            <div>
              <button
                onClick={this.onClickStart}
                className="button start-btn"
                type="button"
                disabled={isTimeRunning}
              >
                Start
              </button>
              <button
                onClick={this.onClickStop}
                className="button stop-btn"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onClickReset}
                className="button reset-btn"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
