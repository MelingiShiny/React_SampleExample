import React, { Component } from 'react'

class ProductInfo extends Component {
    constructor(props) {
      super(props)
    }

    handleQuantityChange = e =>{
        this.props.onQuantityChange(e.target.value)
    }

  render() {
    return (
      <div>
        <h1>Product Information</h1>
        <div>
            <label>Product Quantity</label>
            <input type="text" value={this.props.quantity} onChange={this.handleQuantityChange} />
        </div>
      </div>
    )
  }
}

export default ProductInfo