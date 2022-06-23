import React, { Component } from 'react'

export default class Editable extends Component {
  state={
    title: '',
    poster: '',
    cohort: '',
    description: '',
    url: ''
  }

  onChangeId = (e) => {
    this.setState({
      id: e.target.value
    })
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
    this.props.editResource(this.state)
    this.setState({
      editid: '',
      title: '',
      poster: '',
      cohort: '',
      description: '',
      url: ''
    })
  }


  render() {
    return (
     <div className='edit-container'> 
        <form onSubmit={this.onSubmit} className='form'>
          <input 
            type='text'
            name='editid'
            placeholder='Resource Id'
            value={this.state.editid}
            onChange={this.onChangeId}
          />

          <input 
            type="text" 
            name="title"
            placeholder='Edit title...'
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
      

          <input 
            type="text" 
            name="poster"
            placeholder='Edit Name...'
            value={this.state.poster}
            onChange={this.onChangePoster}
          />

          <input 
            type="text" 
            name="cohort"
            placeholder='Edit Cohort...'
            value={this.state.cohort}
            onChange={this.onChangeCohort}
          />

          <input 
            type="text" 
            name="description"
            placeholder='Edit Description..'
            value={this.state.description}
            onChange={this.onChangeDescription}
          />

          <input 
            type="text" 
            name="url"
            placeholder='Edit Link'
            value={this.state.url}
            onChange={this.onChangeUrl}
          />

          <input type="submit" 
          value="submit" 
          className='btn-editResource'/>

        </form>
      </div>
    )
  }
}
