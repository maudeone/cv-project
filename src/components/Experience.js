import React, { Component } from 'react'


export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.showForm = this.showForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteJob = this.deleteJob.bind(this)
    this.addChangedJob = this.addChangedJob.bind(this)
    this.state = {
      showForm: false,
      jobs: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let inputs = e.target.getElementsByTagName('input')
    let newSchool = {
      company: inputs[0].value,
      title: inputs[1].value,
      duration: inputs[2].value,
      responsibilities: inputs[3].value,
      edit: false
    }

    this.setState(prev => ({
      jobs: [...prev.jobs, newSchool],
      showForm: false
    }))
  }

  showForm = () => {
    this.setState({
      showForm: true
    })
  }

  editSchool = (index) => {
    let newJobs = this.state.jobs
    let schoolToChange = newJobs[index]
    schoolToChange.edit = true
    newJobs.splice(index, 1, schoolToChange)
    console.log(schoolToChange)
    this.setState({
      jobs: newJobs
    })
  }

  addChangedJob = (event) => {
    event.preventDefault()
    let inputs = event.target.getElementsByTagName('input')
    let index = inputs[4].value
    let newSchool = {
      company: inputs[0].value,
      title: inputs[1].value,
      duration: inputs[2].value,
      responsibilities: inputs[3].value,
      edit: false
    }

    let newJobs = this.state.jobs
    newJobs.splice(index, 1, newSchool)

    this.setState({
      jobs: newJobs
    })
  }

  deleteJob = (index) => {
    let newJobs = this.state.jobs
    newJobs.splice(index, 1)
    console.log('deleteJob func')
    console.log(index)

    this.setState({
      Jobs: newJobs
    })
  }

  render() {
    const jobsContent = this.state.jobs.map((job, index) => {
      let element
      if (!job.edit) {
        element = (
          <div key={index} className="generalInfo">
            <p>Company:  {job.company}</p>
            <p>Title:  {job.title}</p>
            <p>Duration:  {job.duration}</p>
            <p>Responsibilities:  {job.responsibilities}</p>
            <div className="buttonContainer">
              <button className="generalButton" onClick={() => this.editSchool(index)}>Edit</button>
              <button className="generalButton" onClick={() => this.deleteJob(index)}>Delete</button>
            </div>
          </div>
        )
      } else {
        element = (
          <form key={index} onSubmit={this.addChangedJob} className="generalForm">
          <label className="generalLabel">Company</label>
          <input htmlFor="company" type="text" defaultValue={job.company} className="generalInput"/>

          <label className="generalLabel">Title</label>
          <input htmlFor="title" type="text" defaultValue={job.title} className="generalInput"  />

          <label className="generalLabel">Duration</label>
          <input htmlFor="duration" type="text" defaultValue={job.duration} className="generalInput"  />

          <label className="generalLabel">Responsibilities</label>
          <input htmlFor="responsibilities" type="text" defaultValue={job.responsibilities} className="generalInput"  />

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
        <form onSubmit={this.handleSubmit} className="generalInfo">
        <label className="generalLabel">Company:</label>
        <input htmlFor="school" type="text" className="generalInput"/>

        <label className="generalLabel">Title:</label>
        <input htmlFor="cert" type="text" className="generalInput"  />

        <label className="generalLabel">Duration:</label>
        <input htmlFor="completed date" type="text" className="generalInput"  />

        <label className="generalLabel">Responsibilities:</label>
        <input htmlFor="responsibilities" type="text" className="generalInput"  />

        <input className="generalButton" type="submit" value="submit" />
      </form>
      )
    } else {
      form = <button className="generalButton" onClick={this.showForm}>Add</button>
    }

    return (
      <div className="generalContainer">
        <h2 className="header">Experience</h2>
        <div className="generalInfo">
          {jobsContent}
          {form}
        </div>
      </div>
    )
  }
}
