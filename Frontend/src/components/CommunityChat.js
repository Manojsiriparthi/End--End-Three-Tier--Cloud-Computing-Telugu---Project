import React, { useState } from 'react';

function CommunityChat() {
  const [messages, setMessages] = useState([
    { name: 'Alice', text: "I'm looking for DevOps positions with 3 years of experience." },
    { name: 'Bob', text: "You should check out the Job Portal in this app." },
    { name: 'Alice', text: 'Thank you!' },
  ]);
  
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { name: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Community Chat</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto', marginBottom: '20px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{message.name}</strong>: {message.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ flex: '1', padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSendMessage}
          style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#3498db', color: '#fff', border: 'none' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default CommunityChat;

