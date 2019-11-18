import React from 'react'
import JobList from './joblist.jsx'
import AddJob from './addJob.jsx'
import FollowUp from './followUp.jsx'

//import other components

class App extends React.Component {
  constructor(props) {
    super (props)

    this.state = {
      jobList: [], 
      date: '', 
      companyName: '', 
      followUp: '', 
      dateFollowUp: '', 
      id: '',
      showFollowUp: false, 
      current: ''
    }
    //function bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showFollowUp = this.showFollowUp.bind(this);


  }
  handleInputChange(value, inputType) {
    let change = {}
    change[inputType] = value

    this.setState(change)
  }

  showFollowUp(id) {
    this.setState({
      showFollowUp: !this.state.showFollowUp,
      current: id
    });
  };
  

  handleSubmit() {
      //set state to be current state of each thing typed in
      //send this object to database
      let job = { 
        date : this.state.date, 
        companyName: this.state.companyName, 
        followUp: this.state.followUp, 
        dateOfFollowUp: this.state.dateFollowUp
      }

    //get all jobs in database, and assign them to joblist in state
    fetch('/jobs',
      { method: 'POST',
          body: JSON.stringify(job),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          console.log(res)
          fetch('/jobs')
            .then((result) => {
              return result.json()
            })
            .then((parsed) => {
              this.setState({
                jobList: parsed
              })
            })
            .catch()
        })
          .catch(err => {    
            console.log(err);
          })

  }
  handleUpdate(id) {
    //change state to = true
    //make modal pop up to update follow up date
    //update object by id in database
    let changes = {
      followUp: this.state.followUp, 
      dateFollowUp: this.state.dateFollowUp
    }
    fetch(`/jobs/?id=${id}`,
      { method: 'PUT',
          body: JSON.stringify(changes),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          console.log(res)
          fetch('/jobs')
            .then((result) => {
              return result.json()
            })
            .then((parsed) => {
              this.setState({
                jobList: parsed
              })
            })
            .catch()
        })
          .catch(err => {    
            console.log(err);
          })

  }


  handleDelete(id) {
    //delete object by id in database
    fetch(`/jobs/?id=${id}`,
      { method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then((res) => {
          console.log(res)
          fetch('/jobs')
            .then((result) => {
              return result.json()
            })
            .then((parsed) => {
              this.setState({
                jobList: parsed
              })
            })
            .catch()
        })
          .catch(err => {    
            console.log(err);
          })
  }


  
  componentDidMount() {
    fetch('/jobs')
      .then((result) => {
        return result.json()
      })
      .then((parsed) => {
        this.setState({
          jobList: parsed
        })
        console.log(this.state.jobList)
      })
      .catch()
  }



  render() {
    if(this.state.showFollowUp) {
      return (
      <div>
        <FollowUp 
        showFollowUp={this.state.showFollowUp} 
        onQuit={this.showFollowUp} 
        handleInputChange={this.handleInputChange}
        handleUpdate= {this.handleUpdate}
        current={this.state.current}
        />
        </div>
      )
    } else {
    return (
      <div className="main" style= {{
        height: '500px'
      }}>
      <AddJob  
      handleSubmit={this.handleSubmit} 
      handleInputChange={this.handleInputChange}
      />

      <JobList 
      list={this.state.jobList} 
      handleSubmit={this.handleSubmit}
      handleDelete={this.handleDelete}
      handleUpdate={this.handleUpdate}
      showFollowUp={this.showFollowUp}
      />

      {/* conditionally render modal to update follow up date and info */}
      </div>
    )
    }
  }


}

export default App;