import React, { Component } from "react"
import "./App.css"
import { getRecentBlocks } from "./helpers/api"
import Blocks from "./components/blocks"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocks: null
    }
  }

  componentDidMount() {
    getRecentBlocks().then(blocks => {
      this.setState({ blocks: blocks })
    })
  }

  render() {
    const { blocks } = this.state
    return (
      <section className="App">{blocks && <Blocks blocks={blocks} />}</section>
    )
  }
}

export default App
