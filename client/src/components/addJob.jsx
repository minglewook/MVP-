import React from 'react';

var AddJob = ({handleSubmit, handleInputChange}) => (
  <div className="company-form">
        <h2>Job Application Tracker</h2>
        <label>Date: 
          <input type="text" onChange={(e) => {
            handleInputChange(e.target.value, 'date')
          }}></input>
        </label>
        <label>Company: 
          <input type="text" onChange={(e) => {
            handleInputChange(e.target.value, 'companyName')
          }}></input>
        </label>
        <button onClick={handleSubmit}>Add new Company</button>
      </div>
)

export default AddJob;