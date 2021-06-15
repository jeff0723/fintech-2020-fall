import React, { useState, useEffect } from 'react';
import './css/App.css';
import Form from './components/Form'
function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
