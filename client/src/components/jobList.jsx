import React from 'react';
import Job from './job.jsx'

//list of each job, least complicated part.
//handle passing list, passing handle edit, handle delete 

var JobList = ({list, handleSubmit, handleUpdate, handleDelete, showFollowUp}) => (
  <div>
    {list.map((item, index) => <Job individual={item} key={index} handleUpdate={handleUpdate} handleDelete={handleDelete} showFollowUp={showFollowUp}/>)}
  </div>
)



export default JobList;