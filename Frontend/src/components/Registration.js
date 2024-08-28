import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    timings: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Implement form submission logic
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Course:
          <select name="course" value={formData.course} onChange={handleChange}>
            <option value="awsDevOps">AWS DevOps</option>
            <option value="azureDevOps">Azure DevOps</option>
          </select>
        </label>
        <br />
        <label>
          Timings:
          <select name="timings" value={formData.timings} onChange={handleChange}>
            <option value="morning">Morning 7:30-9:00</option>
            <option value="evening">Evening 8:00-9:30</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;

