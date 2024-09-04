import React, { useState } from 'react';

function JobPortal() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const jobs = [
    { title: 'DevOps Engineer', company: 'XYZ Company', salary: '7-10 LPA', experience: '3 yrs', location: 'Bangalore' },
    { title: 'Cloud Engineer (Fresher)', company: 'ABC Company', salary: 'Up to 5 LPA', experience: '0 yrs', location: 'Hyderabad' },
    { title: 'DevOps Engineer', company: 'LMN Inc.', salary: '6-9 LPA', experience: '2 yrs', location: 'Chennai' },
    { title: 'Cloud Architect', company: 'DEF Corp.', salary: '10-15 LPA', experience: '5 yrs', location: 'Bangalore' },
  ];

  const filteredJobs = jobs.filter(job => 
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Job Portal</h2>
      <input 
        type="text" 
        placeholder="Search by location..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', marginBottom: '20px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <ul>
        {filteredJobs.map((job, index) => (
          <li key={index}>
            {job.title} at {job.company}, Salary: {job.salary}, Experience: {job.experience}, Location: {job.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobPortal;

