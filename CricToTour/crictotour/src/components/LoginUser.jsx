import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginID, setLoginID] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    fetch('http://localhost:3000/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loginID, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.login) {
          
          navigate('/admin');
        } else {
          setMessage('Wrong loginID or password');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setMessage('An error occurred');
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login ID"
                  value={loginID}
                  onChange={(e) => setLoginID(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={handleLogin}>
                  Login
                </button>
              </div>
              {message && <p className="text-danger text-center">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
