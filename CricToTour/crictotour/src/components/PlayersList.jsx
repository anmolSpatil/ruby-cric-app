import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/players';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPlayers(data);
      })
      .catch((error) => console.error('Error fetching players:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Players List</h1>
      <div className="alert alert-info">
        This is a list of players.
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>Date of Birth</th>
            <th>Country</th>
            <th>Team ID</th>
            <th>Jersey Number</th>
            <th>Runs Scored</th>
            <th>Wickets Taken</th>
            <th>Matches Played</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.playerID}>
              <td>{player.playerID}</td>
              <td>{player.playerName}</td>
              <td>{player.dateOfBirth}</td>
              <td>{player.country}</td>
              <td>{player.teamID}</td>
              <td>{player.jerseyNO}</td>
              <td>{player.runsScored}</td>
              <td>{player.wicketsTaken}</td>
              <td>{player.matchesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-3">
        <Link to="/playeradd" className="btn btn-primary">Add Player</Link>
        <Link to="/playerupdate" className="btn btn-warning ml-3">Update Player</Link>
        <Link to="/playerdelete" className="btn btn-danger ml-3">Delete Player</Link>
      </div>
    </div>
  );
}

export default PlayersList;
