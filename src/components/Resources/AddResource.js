import React, { Component } from 'react';


export default class addResource extends Component {
  render() {
    return (
      <div className="addResoure-form">
        <input 
          type="text" 
          name="title"
          placeholder='Add Title...'>
        </input>

        <input 
          type="text" 
          name="poster"
          placeholder='Your Name...'>
        </input>

        <input 
          type="text" 
          name="cohort"
          placeholder='Your Cohort...'>
        </input>

        <input 
          type="text" 
          name="description"
          placeholder='Enter a brief description of your resource...'>
        </input>

        <input 
          type="text" 
          name="url"
          placeholder='Resource Link'>
        </input>

        <button className='btn-addResource'>Submit</button>


      </div>
    )
  }
}
