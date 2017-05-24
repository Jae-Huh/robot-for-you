import React from 'react'

import { getRobot } from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      loadingImg: false,
      errMessage: null,
      name: '',
      imgUrl: ''
    }
  }

  robotForName (e) {
    e.preventDefault()
    const name = this.state.name
    getRobot(name, (err, result) => {
      if (err) {
        this.setState({
          errMessage: err
        })
        return
      }
      const jsonResult = JSON.parse(result.text)
      this.setState({
        imgUrl: jsonResult.imageUrl
      })
    })
    this.gotRobot.bind(this)()
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  gotRobot() {
    this.setState({
      loadingImg: true
    })
  }

  imgLoaded() {
    this.setState({
      loadingImg: false
    })
  }

  render() {
    return (
      <div>
        <h1>What's your robot face?</h1>
        <form>
          <input type="text" name="name" onChange={this.handleChange.bind(this)} placeholder="Type your name here" />
          <button onClick={this.robotForName.bind(this)}>Show my robot face!</button>
          {this.state.loadingImg && <p>Loading your robot...</p>}
        </form>
        <img src={this.state.imgUrl} onLoad={this.imgLoaded.bind(this)} />
      </div>
    )
  }
}

export default App
