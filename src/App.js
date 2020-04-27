import React, { useState } from 'react';
import MemberList from './MemberList.js';
import Form from './components/Form'


function App() {
  const [members, setMembers] = useState(MemberList);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team</h1>
      </header>

      <Form members={members} setMembers={setMembers}/>

      {members.map(member => (
          <div className='member-card' key={member.email}>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.email}</p>
          </div>
  ))}
    </div>
    
  );
  
}

export default App;
