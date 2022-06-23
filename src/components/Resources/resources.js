import React, { Component } from 'react';
import  Resource_Items from './resourceItems.js';

export default class Resources extends Component {

  render(){

    return(
      this.props.resources.map((elem)=>{
        return( 
            <Resource_Items
              elem={elem}
              key={elem.id} 
              delResource={this.props.delResource} 
            />
      )
    }))
  }
}