import React from 'react';

function Courses() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#3498db', marginBottom: '20px' }}>Courses</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
          AWS DevOps
        </div>
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
          Azure DevOps
        </div>
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
          Cloud Engineer
        </div>
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '200px', textAlign: 'center' }}>
          Python
        </div>
      </div>
      <h3 style={{ color: '#2c3e50', marginTop: '30px' }}>Tutors</h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        <li>
          <strong>Naga Srinivas</strong> — AWS
          <p style={{ marginLeft: '20px', fontSize: '16px', color: '#2c3e50' }}>
            Naga Srinivas is an expert in AWS with over 10 years of experience in cloud architecture and DevOps practices. He has trained thousands of professionals in mastering AWS services and implementing best practices for cloud infrastructure.
          </p>
        </li>
        <li>
          <strong>Mustafa</strong> — AWS & DevOps
          <p style={{ marginLeft: '20px', fontSize: '16px', color: '#2c3e50' }}>
            Mustafa is a seasoned DevOps engineer with deep expertise in AWS and DevOps tools. His hands-on approach to teaching has helped numerous students transition into successful DevOps careers. Mustafa specializes in CI/CD pipelines and automation.
          </p>
        </li>
      </ul>
      <h3 style={{ color: '#2c3e50', marginTop: '30px' }}>Technologies Offered in DevOps</h3>
      <p>
        Linux, Git, GitHub, Maven, Jenkins, Nexus, Tomcat, SonarQube, Ansible, Docker, Kubernetes, Helm, ArgoCD, 
        Prometheus, Grafana, Terraform, Shell Scripting, SQL
      </p>
      <h3 style={{ color: '#2c3e50', marginTop: '30px' }}>Class Timings</h3>
      <p>Monday - Friday</p>
      <p>Morning 7:30-9:00, Evening 8:00 - 9:30</p>
    </div>
  );
}

export default Courses;

