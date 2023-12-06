import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerAdd() {
  const [playerData, setPlayerData] = useState({
    playerName: '',
    dateOfBirth: '',
    country: '',
    teamID: '',
    jerseyNO: '',
    runsScored: '',
    wicketsTaken: '',
    matchesPlayed: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerData({ ...playerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/players'; 

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData),
      });

      if (response.ok) {
       
        navigate('/players');
      } else {
       
        console.error('Error adding player');
      }
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Add Player</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Player Name</label>
          <input
            type="text"
            name="playerName"
            value={playerData.playerName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="text"
            name="dateOfBirth"
            value={playerData.dateOfBirth}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={playerData.country}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Team ID</label>
          <input
            type="text"
            name="teamID"
            value={playerData.teamID}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Jersey Number</label>
          <input
            type="text"
            name="jerseyNO"
            value={playerData.jerseyNO}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Runs Scored</label>
          <input
            type="text"
            name="runsScored"
            value={playerData.runsScored}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Wickets Taken</label>
          <input
            type="text"
            name="wicketsTaken"
            value={playerData.wicketsTaken}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Matches Played</label>
          <input
            type="text"
            name="matchesPlayed"
            value={playerData.matchesPlayed}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Player
        </button>
      </form>
    </div>
  );
}

export default PlayerAdd;
