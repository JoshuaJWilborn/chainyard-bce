import React from "react"
import Block from "./block"

export default class Blocks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { blocks } = this.props
    return (
      <table className="pure-table pure-table-striped">
        <BlocksHeader />
        <tbody>
          {blocks &&
            blocks.map(block => {
              return <Block block={block} key={block.hash} />
            })}
        </tbody>
      </table>
    )
  }
}

function BlocksHeader(props) {
  return (
    <thead>
      <tr>
        <th>Hash</th>
        <th>Size</th>
        <th>Height</th>
        <th>Transaction Count</th>
      </tr>
    </thead>
  )
}
