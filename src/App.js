
import React, { Component } from 'react';
import Nav from './components/layout/nav.js'
import AddResource from './components/Resources/addResource.js';
import Editable from './components/Resources/Editable.js';
import Resources from './components/Resources/resources.js';

const url = 'http://localhost:5000'

export default class App extends Component {
  state = {
    resources:[]
  }

  componentDidMount(){
    fetch('http://localhost:5000/')
    .then((response) => response.json())
    .then((data) => this.setState({
      resources: data
    }))
    .catch((err) => console.log(err))
  }

  addResource = (obj) => {
    let newResource = JSON.stringify(obj)

    fetch(`${url}/add`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: newResource
    })
    .then((response) => response.json())
    .then((data) => this.setState({
      resources: [...this.state.resources, data]
    }))
    .catch((err) => console.log(err))
  }

  delResource = (id) => {
    let toBeDeleted = {
      id: id
    }

    let delObj = JSON.stringify(toBeDeleted)

    fetch(`${url}/delete`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      },
      body: delObj
    })
    .then((response) => response.json())
    .then((data) => this.setState({ resources: [this.state.resources.filter(resource => resource.id !== data.id)]}))
    .catch((err) => console.log(err))
  }

  editResource = (obj) => {
    let updatedObj = JSON.stringify(obj)

    fetch(`${url}/edit`,
    {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: updatedObj
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }


  render(){

    return(
      <div className='app-container'>
        <Nav />
        <AddResource addResource={this.addResource} />
        <Editable editResource={this.editResource}/>
        <Resources resources={this.state.resources} delResource={this.delResource}/>
      </div>
    )

  }

}