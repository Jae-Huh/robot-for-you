import React from 'react'

import { getRobot } from '../api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
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
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>What's your robot face?</h1>
        <form>
          <input type="text" name="name" onChange={this.handleChange.bind(this)} placeholder="Type your name here" />
          <button onClick={this.robotForName.bind(this)}>Show me my robot face!</button>
        </form>
        <img src={this.state.imgUrl} />
      </div>
    )
  }
}

export default App
