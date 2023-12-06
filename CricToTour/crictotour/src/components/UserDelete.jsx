import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDelete() {
  const [userId, setUserId] = useState('');
  const [userOptions, setUserOptions] = useState([]);
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

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!userId) {
        alert('Please select a user before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/users/${userId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/users');
      } else {
        console.error('Error deleting user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete User</h1>
      <form onSubmit={handleDelete}>
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
        <button type="submit" className="btn btn-danger mt-3" disabled={!userId}>
          Delete User
        </button>
      </form>
    </div>
  );
}

export default UserDelete;
