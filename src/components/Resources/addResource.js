import React, { Component } from 'react';


export default class AddResource extends Component {

state = {
  title: '',
  poster: '',
  cohort: '',
  description: '',
  url: ''
}

onChangeTitle = (e) => this.setState({
  title: e.target.value,
})


onChangePoster = (e) => this.setState({
  poster: e.target.value
})

onChangeCohort = (e) => this.setState({
  cohort: e.target.value
})

onChangeDescription = (e) => this.setState({
  description: e.target.value
})

onChangeUrl = (e) => this.setState({
 url: e.target.value
})

onSubmit = (e) => {
  e.preventDefault()
  this.props.addResource(this.state)
  this.setState({
    title: '',
    poster: '',
    cohort: '',
    description: '',
    url: ''
  })
}


  render() {
    return (
      <div className="addResoure-form-container">
        <form onSubmit={this.onSubmit} className="form">

          <input 
            type="text" 
            name="title"
            placeholder='Add Title...'
            value={this.state.title}
            onChange={this.onChangeTitle}
            />
    

          <input 
            type="text" 
            name="poster"
            placeholder='Your Name...'
            value={this.state.poster}
            onChange={this.onChangePoster}
          />

          <input 
            type="text" 
            name="cohort"
            placeholder='Your Cohort...'
            value={this.state.cohort}
            onChange={this.onChangeCohort}
          />

          <input 
            type="text" 
            name="description"
            placeholder='Enter a brief description of your resource...'
            value={this.state.description}
            onChange={this.onChangeDescription}
          />

          <input 
            type="text" 
            name="url"
            placeholder='Resource Link'
            value={this.state.url}
            onChange={this.onChangeUrl}
          />

          <input type="submit" value="submit" className='btn-addResource'/>

        </form>
      </div>
    )
  }
}
