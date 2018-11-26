import React from "react"
export default class PaginatedRows extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      perPage: 5,
      currentPage: 0
    }
    this.goNext = this.changeCurrentPageByValue(1).bind(this)
    this.goPrev = this.changeCurrentPageByValue(-1).bind(this)
  }

  changeCurrentPageByValue(val) {
    return function() {
      this.setState({
        currentPage: this.state.currentPage + val
      })
    }
  }

  render() {
    const { items, itemKey, SubComponent, componentKey } = this.props
    const { perPage, currentPage } = this.state
    const maxPages = Math.ceil(items.length / perPage)
    const startIndex = currentPage * perPage
    const endIndex = startIndex + perPage
    return (
      <>
        {items.slice(startIndex, endIndex).map((item, index) => {
          // we setup the itemObject how we want it to appear so we can apply it with spread operator to get a dynamic attribute name
          // (the expected attribute for the object as expected by the component)
          const itemObj = { key: item[itemKey], [componentKey]: item }
          return <SubComponent {...itemObj} />
        })}
        <tr>
          <td colSpan="100%" style={{ textAlign: "center" }}>
            <nav>
              <button
                disabled={currentPage === 0}
                onClick={this.goPrev}
                className="pure-button">
                Prev {perPage}
              </button>
              <span style={{ margin: "2em" }}>
                Page {currentPage + 1} of {maxPages + 1}
              </span>
              <button
                disabled={currentPage >= maxPages}
                onClick={this.goNext}
                className="pure-button">
                Next {perPage}
              </button>
            </nav>
          </td>
        </tr>
      </>
    )
  }
}
