import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px' }}>
      <h1 style={{ color: '#3498db', fontSize: '48px', fontWeight: 'bold', textShadow: '2px 2px #8e44ad' }}>
        Welcome to Cloud Computing in Telugu
      </h1>
      <p style={{ fontSize: '20px', color: '#2c3e50', marginTop: '30px', maxWidth: '800px', margin: '0 auto' }}>
        Explore the world of Cloud Computing with resources in Telugu! Our platform offers courses, materials, and a vibrant community to help you master Cloud and DevOps technologies.
      </p>
      <div style={{ marginTop: '40px' }}>
        <button
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#e74c3c',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            margin: '10px',
          }}
          onClick={() => window.location.href = '/courses'}
        >
          Browse Courses
        </button>
      </div>
    </div>
  );
}

export default Home;

