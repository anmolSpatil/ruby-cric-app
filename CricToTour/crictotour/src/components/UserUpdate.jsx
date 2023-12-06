import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserUpdate() {
  const [userId, setUserId] = useState('');
  const [userOptions, setUserOptions] = useState([]);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/users';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserOptions(data.map((user) => ({ id: user.userID, name: user.email })));
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleUserSelect = (e) => {
    setUserId(e.target.value);
  };

  useEffect(() => {
    if (userId) {
      const apiUrl = `http://localhost:3000/users/${userId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!userId) {
        alert('Please select a user to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/users/${userId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        navigate('/users');
      } else {
        console.error('Error updating user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update User</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Select User</label>
          <select
            value={userId}
            onChange={(e) => handleUserSelect(e)}
            className="form-control"
          >
            <option value="">Select a user</option>
            {userOptions.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        {userId && (
          <div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={userData.email || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={userData.firstName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={userData.lastName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                value={userData.dateOfBirth || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={userData.gender || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={userData.country || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update User
        </button>
      </form>
    </div>
  );
}

export default UserUpdate;
