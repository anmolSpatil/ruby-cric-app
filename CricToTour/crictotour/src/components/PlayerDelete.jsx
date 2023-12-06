import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PlayerDelete() {
  const [playerId, setPlayerId] = useState('');
  const [playerOptions, setPlayerOptions] = useState([]);
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

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!playerId) {
        alert('Please select a player before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/players/${playerId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/players');
      } else {
        console.error('Error deleting player');
      }
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Player</h1>
      <form onSubmit={handleDelete}>
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
        <button type="submit" className="btn btn-danger mt-3" disabled={!playerId}>
          Delete Player
        </button>
      </form>
    </div>
  );
}

export default PlayerDelete;
