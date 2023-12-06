import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function RefereesList() {
  const [referees, setReferees] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/referees';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setReferees(data);
      })
      .catch((error) => console.error('Error fetching referees:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Referees List</h1>
      <div className="alert alert-info">
        This is a list of referees.
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Referee ID</th>
            <th>Referee Name</th>
            <th>Date of Birth</th>
            <th>Nationality</th>
            <th>Matches Officiated</th>
          </tr>
        </thead>
        <tbody>
          {referees.map((referee) => (
            <tr key={referee.refereeID}>
              <td>{referee.refereeID}</td>
              <td>{referee.refereeName}</td>
              <td>{referee.dateOfBirth}</td>
              <td>{referee.nationality}</td>
              <td>{referee.matchesOfficiated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3">
        <Link to="/refereeadd" className="btn btn-primary">Add Referee</Link>
        <Link to="/refereeupdate" className="btn btn-warning ml-3">Update Referee</Link>
        <Link to="/refereedelete" className="btn btn-danger ml-3">Delete Referee</Link>
      </div>
    </div>
  );
}

export default RefereesList;
