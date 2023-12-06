import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/users';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Users List</h1>
      <div className="alert alert-info">This is a list of users.</div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userID}>
              <td>{user.userID}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3">
        <Link to="/useradd" className="btn btn-primary">
          Add User
        </Link>
        <Link to="/userupdate" className="btn btn-warning ml-3">
          Update User
        </Link>
        <Link to="/userdelete" className="btn btn-danger ml-3">
          Delete User
        </Link>
      </div>
    </div>
  );
}

export default UsersList;
