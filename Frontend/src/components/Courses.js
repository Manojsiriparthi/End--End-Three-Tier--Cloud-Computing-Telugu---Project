import React from 'react';

function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      <ul>
        <li>AWS DevOps</li>
        <li>Azure DevOps</li>
        <li>AWS Solution Architect</li>
        <li>Python</li>
      </ul>
      <h3>Tutors</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li>Naga Srinivas — AWS</li>
        <li>Mustafa — AWS & DevOps</li>
      </ul>
      <h3>Tools Offered in DevOps</h3>
      <p>Git, GitHub, Jenkins, Docker, Kubernetes, Terraform, SQL, Shell & Python, ArgoCD</p>
      <h3>Class Timings</h3>
      <p>Monday - Friday</p>
      <p>Morning 7:30-9:00, Evening 8:00 - 9:30</p>
    </div>
  );
}

export default Courses;

