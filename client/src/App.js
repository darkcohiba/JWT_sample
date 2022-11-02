import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [loggedinUsername, setLoggedInUsername] = useState('');
  const [loggedinEmail, setLoggedInEmail] = useState('');

  function submitRegistration(e){
    e.preventDefault();
    
  }
  return (
    <div className="App">
      <h1>Create New User</h1>
      {/* onSubmit={submitRegistration} */}
      <form > 
        <div>
          Username:{' '}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Email:{' '}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <h1>Login</h1>
      {/* onSubmit={submitLogin} */}
      <form >
        <div>
          Username:{' '}
          <input
            type="text"
            value={loginUsername}
            onChange={(e) => setLoginUsername(e.target.value)}
          />
        </div>
        <div>
          Password:{' '}
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
