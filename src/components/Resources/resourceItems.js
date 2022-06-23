import React, { Component } from 'react';

export default class Resource_Items extends Component {

  render(){
const {id} = this.props.elem
    return(

    <div className='resource-container'>

      <h1>{this.props.elem.title}</h1>

      <p>Resource Id: {id}</p>

      <p>Posted By: {this.props.elem.poster}</p>

      <p>Cohort: {this.props.elem.cohort}</p>

      <p>Description: {this.props.elem.description}</p>

      <p>Link: {this.props.elem.url}</p>

      <button onClick={this.props.delResource.bind(this, id)} className="btn-delete">Delete</button>
      
    </div>

    )
  }

}