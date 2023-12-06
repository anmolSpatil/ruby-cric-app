import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/teams';
    //console.log('tggtg');

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        //alert(JSON.stringify(data));
        setTeams(data);
      })
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Teams List</h1>
      <div className="alert alert-info">
        This is a list of sports teams.
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Team ID</th>
            <th>Team Name</th>
            <th>Players</th>
            <th>Captain</th>
            <th>Coach</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.teamID}>
              <td>{team.teamID}</td>
              <td>{team.teamName}</td>
              <td>{team.players}</td>
              <td>{team.captain}</td>
              <td>{team.coach}</td>
              <td>{team.country}</td>
              <td>{team.city ? team.city : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-3">
        <Link to="/teamadd" className="btn btn-primary">Add Team</Link>
        <Link to="/teamupdate" className="btn btn-warning ml-3">Update Team</Link>
        <Link to="/teamdelete" className="btn btn-danger ml-3">Delete Team</Link>
      </div>
    </div>
  );
}

export default TeamList;
