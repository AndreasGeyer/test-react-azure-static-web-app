
import './App.css';
import React from 'react';


function App() {

  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/hello';
    fetch(apiUrl)
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => setMessage('Error: ' + error.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>Current domain: <b>{window.location.hostname}</b></p>
        
        

        <p>API URL: <b>{process.env.REACT_APP_API_URL}</b></p>
        <p>API response: <b>{message}</b></p>
        <button onClick={() => alert('Chrissi is the best <3')}>Show Message</button>
      </header>
    </div>
  );
}

export default App;
