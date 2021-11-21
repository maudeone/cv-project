import React, { Component } from 'react'

export default class GeneralInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      name: '',
      email: '',
      phone: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.form = this.form.bind(this)
    this.info = this.info.bind(this)
    this.editHandler = this.editHandler.bind(this)
  }
  
  handleSubmit(event) {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    console.log(inputs)

    this.setState({
      showForm: false,
      name: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value
    })
  }

  editHandler() {
    this.setState({
      showForm: true
    })
  }

  form = () => {
    return (
      <form onSubmit={this.handleSubmit} className="generalForm">
        <label className="generalLabel">Name:</label>
        <input htmlFor="name" type="text" defaultValue={this.state.name} className="generalInput" />

        <label className="generalLabel">Email:</label>
        <input htmlFor="Email" type="email" defaultValue={this.state.email} className="generalInput"  />

        <label className="generalLabel">Phone Number:</label>
        <input htmlFor="phone number" type="text" defaultValue={this.state.phone} className="eneralInput"  />

        <input className="generalButton" type="submit" value="submit" />
      </form>
    )
  }
    

  info = () => {
    return(
      <div className="generalInfo">
        <p className="name">Name: {this.state.name}</p>
        <p className="email">Email: {this.state.email}</p>
        <p className="phone">Phone Number: {this.state.phone}</p>
        <button className="generalButton" onClick={this.editHandler}>Edit</button>
      </div>
    )
  }

  render() {
    let content
    if (this.state.showForm) {
      content = this.form()
    } else {
      content = this.info()
    }


    return (
      <div className="generalContainer">
        <h2 className="header">General Information</h2>
        <div>{content}</div>
      </div>
    )
  }
}

