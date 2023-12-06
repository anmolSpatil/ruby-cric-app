import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerUpdate() {
  const [playerId, setPlayerId] = useState('');
  const [playerOptions, setPlayerOptions] = useState([]);
  const [playerData, setPlayerData] = useState({});
  const navigate = useNavigate();

 
  useEffect(() => {
    const apiUrl = 'http://localhost:3000/players';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPlayerOptions(data.map((player) => ({ id: player.playerID, name: player.playerName })));
      })
      .catch((error) => console.error('Error fetching players:', error));
  }, []);

  const handlePlayerSelect = (e) => {
    setPlayerId(e.target.value);
  };

  useEffect(() => {
    if (playerId) {
      const apiUrl = `http://localhost:3000/players/${playerId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setPlayerData(data);
        })
        .catch((error) => console.error('Error fetching player data:', error));
    }
  }, [playerId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!playerId) {
        alert('Please select a player to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/players/${playerId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerData), 
      });

      if (response.ok) {
        navigate('/players');
      } else {
        console.error('Error updating player');
      }
    } catch (error) {
      console.error('Error updating player:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlayerData({ ...playerData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update Player</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Select Player</label>
          <select
            value={playerId}
            onChange={(e) => handlePlayerSelect(e)}
            className="form-control"
          >
            <option value="">Select a player</option>
            {playerOptions.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
        </div>
        {playerId && (
          <div>
            <div className="form-group">
              <label>Player Name</label>
              <input
                type="text"
                name="playerName"
                value={playerData.playerName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                value={playerData.dateOfBirth || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={playerData.country || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Team ID</label>
              <input
                type="text"
                name="teamID"
                value={playerData.teamID || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Jersey Number</label>
              <input
                type="text"
                name="jerseyNO"
                value={playerData.jerseyNO || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Runs Scored</label>
              <input
                type="text"
                name="runsScored"
                value={playerData.runsScored || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Wickets Taken</label>
              <input
                type="text"
                name="wicketsTaken"
                value={playerData.wicketsTaken || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Matches Played</label>
              <input
                type="text"
                name="matchesPlayed"
                value={playerData.matchesPlayed || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update Player
        </button>
      </form>
    </div>
  );
}

export default PlayerUpdate;
