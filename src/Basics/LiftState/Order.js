import React, { Component } from 'react'
import ProductInfo from './ProductInfo';
import Address from './Address';
import Summary from './Summary';

 class Order extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         quantity:'',
         address:''
      }
    }
   
    orderQuantityChanged = val =>{
        this.setState({quantity:val});
    }

    addressChanged = val => {
        this.setState({address:val})
    }
  render() {
    return (
        <div>
      <ProductInfo quantity={this.state.quantity} onQuantityChange={this.orderQuantityChanged}></ProductInfo>
      <Address address={this.state.address} onAddressChange ={this.addressChanged}></Address>
      <Summary quantity={this.state.quantity} address={this.state.address} onQuantityChange = {this.orderQuantityChanged}></Summary>
        </div>
    )
  }
}

export default Order