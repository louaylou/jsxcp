import React from 'react';
import "bulma/css/bulma.css";
import ProfilePhoto from './component/Profile/Profilephoto';
import FullName from './component/Profile/Fullname';
import Address from './component/Profile/Adress';

function App() {
  return (
    <div style={{ background: 'lightgray', padding: '20px' }}>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
