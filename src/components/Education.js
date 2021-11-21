import React, { Component } from 'react'


export default class Education extends Component {
  constructor(props) {
    super(props)
    this.showForm = this.showForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteSchool = this.deleteSchool.bind(this)
    this.addChangedSchool = this.addChangedSchool.bind(this)
    this.state = {
      showForm: false,
      education: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.getElementsByTagName('input')
    console.log(inputs[0].value)

    let newSchool = {
      name: inputs[0].value,
      cert: inputs[1].value,
      completed: inputs[2].value,
      edit: false
    }

    this.setState(prev => ({
      education: [...prev.education, newSchool],
      showForm: false
    }))
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  editSchool = (index) => {
    let newSchools = this.state.education
    let schoolToChange = newSchools[index]
    schoolToChange.edit = true
    newSchools.splice(index, 1, schoolToChange)
    console.log(schoolToChange)
    this.setState({
      education: newSchools
    })
  }

  addChangedSchool = (event) => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    let index = inputs[3].value
    let newSchool = {
      name: inputs[0].value,
      cert: inputs[1].value,
      completed: inputs[2].value,
      edit: false
    }

    let newSchools = this.state.education
    newSchools.splice(index, 1, newSchool)

    this.setState({
      education: newSchools
    })
  }

  deleteSchool = (index) => {
    let newSchools = this.state.education
    newSchools.splice(index, 1)
    console.log('deleteSchool func')
    console.log(index)

    this.setState({
      schools: newSchools
    })
  }

  render() {
    const educationContent = this.state.education.map((school, index) => {
      let element
      if (!school.edit) {
        element = (
          <div key={index} className="generalInfo">
            <p>School: {school.name}</p>
            <p>Certificate: {school.cert}</p>
            <p>Completion Date: {school.completed}</p>
            <div className="buttonContainer">
              <button className="generalButton" onClick={() => this.editSchool(index)}>Edit</button>
              <button className="generalButton" onClick={() => this.deleteSchool(index)}>Delete</button>
            </div>
          </div>
        )
      } else {
        element = (
          <form key={index} onSubmit={this.addChangedSchool} className="generalInfo">
          <label className="generalLabel">School</label>
          <input htmlFor="school" type="text" defaultValue={school.name} className="generalInput"/>

          <label className="generalLabel">Certificate</label>
          <input htmlFor="cert" type="text" defaultValue={school.cert} className="generalInput"  />

          <label className="generalLabel">Completion Date</label>
          <input htmlFor="completed date" type="text" defaultValue={school.completed} className="generalInput"  />

          <input type="hidden" value={index} />

         <input className="generalButton" type="submit" value="submit" />
        </form>
        )
      }
      return element
    })

    let form

    if (this.state.showForm) {
      form = (
        <form onSubmit={this.handleSubmit} className="generalForm">
        <label className="generalLabel">School:</label>
        <input htmlFor="school" type="text" defaultValue={this.state.name} className="generalInput"/>

        <label className="generalLabel">Certificate:</label>
        <input htmlFor="cert" type="text" defaultValue={this.state.email} className="generalInput"  />

        <label className="generalLabel">Completion Date:</label>
        <input htmlFor="completed date" type="text" defaultValue={this.state.phone} className="generalInput"  />

        <input className="generalButton" type="submit" value="submit" />
      </form>
      )
    } else {
      form = <button className="generalButton" onClick={this.showForm}>Add</button>
    }

    return (
      <div className="generalContainer">
        <h2 className="header">Education</h2>
        <div className="generalInfo">
          {educationContent}
          {form}
        </div>
      </div>
    )
  }
}
