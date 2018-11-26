import React from "react"
import { getBlockTransactions } from "./../helpers/api"
import Transaction from "./transaction"
import PaginatedRows from "./paginatedRows"

export default class Block extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      details: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  toggleDetails() {
    const { hash } = this.props.block

    this.setState({
      ...this.state,
      details: !this.state.details
    })
    if (!this.state.transactions) {
      getBlockTransactions(hash).then(txs =>
        this.setState({
          ...this.state,
          transactions: txs
        })
      )
    }
  }

  render() {
    const { hash, size, height, tx_count } = this.props.block
    const { details, transactions = [] } = this.state
    return (
      <>
        <tr>
          <td>{hash}</td>
          <td>{size}</td>
          <td>{height}</td>
          <td>{tx_count}</td>
        </tr>
        <tr>
          <td colSpan="100%" style={{ textAlign: "center" }}>
            <button
              onClick={this.toggleDetails}
              className="pure-button"
              style={{ width: "100%" }}>
              {details ? "Hide" : "Show"} Transactions
            </button>
          </td>
        </tr>
        <tr>
          {details && transactions && (
            <td colSpan="4">
              Transactions:
              <table className="pure-table pure-table-striped">
                <TransactionsHeader />
                <tbody>
                  <PaginatedRows
                    items={transactions}
                    itemKey="hash"
                    SubComponent={Transaction}
                    componentKey="tx"
                  />
                </tbody>
              </table>
            </td>
          )}
        </tr>
      </>
    )
  }
}

function TransactionsHeader() {
  return (
    <thead>
      <tr>
        <th>hash</th>
        <th>weight</th>
        <th>size</th>
      </tr>
    </thead>
  )
}
