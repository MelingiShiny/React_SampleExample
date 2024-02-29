import React, { Component } from 'react'

export class Summary extends Component {

    handleAddressChange = e=>{
        this.props.onAddressChange(e.target.value)
    }

    handleQuantityChange = e=>{
        this.props.onQuantityChange(e.target.value)
    }
  render() {
    return (
      <div>
        <h1>Summary</h1>
        <div>
            <label>Product Quantity</label>
            <input type="text" value={this.props.quantity} onChange={this.handleQuantityChange} />
        </div>
        <div>
            <label>Address :</label>
            <div>{this.props.address}</div>
        </div>
      </div>
    )
  }
}

export default Summary