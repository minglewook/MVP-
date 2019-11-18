import React from 'react';


var Job = ({individual, handleSubmit, handleUpdate, handleDelete, showFollowUp}) => (
  <li>{individual.date} {individual.companyName} {individual.dateOfFollowUp}  {individual.followUp} 
    <button onClick={() => {
      showFollowUp(individual.id) 
    }}>Click if you've followed up!</button>



    <button onClick={() => {
      if (window.confirm('Are you sure you wanna delete me?')) {
        handleDelete(individual.id)
      }
    }}>Delete</button>
  </li>
)

export default Job;

//delete button for each company
//edit button for each