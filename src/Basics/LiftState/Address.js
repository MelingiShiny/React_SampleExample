import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Address extends Component {

    handleAddressChange = e =>{
        this.props.onAddressChange(e.target.value)
    }
  render() {
    return (
      <div>
         <h1>Address Information</h1>
        <div>
            <label>Address :</label>
            <textarea value={this.props.address} onChange={this.handleAddressChange} ></textarea>
        </div>
      </div>
    )
  }
}


export default Address