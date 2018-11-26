import React from "react"

export default function Transaction(props) {
  // I wasn't quite sure what information is important to list on transactions
  const { hash, weight, size } = props.tx
  return (
    <tr>
      <td>{hash}</td>
      <td>{weight}</td>
      <td>{size}</td>
    </tr>
  )
}
