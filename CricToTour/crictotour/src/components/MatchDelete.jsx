import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MatchDelete() {
  const [matchId, setMatchId] = useState('');
  const [matchOptions, setMatchOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/matches';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMatchOptions(data.map((match) => ({ id: match.matchID, name: match.matchID })));
      })
      .catch((error) => console.error('Error fetching matches:', error));
  }, []);

  const handleMatchSelect = (e) => {
    setMatchId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!matchId) {
        alert('Please select a match before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/matches/${matchId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/matches');
      } else {
        console.error('Error deleting match');
      }
    } catch (error) {
      console.error('Error deleting match:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Match</h1>
      <form onSubmit={handleDelete}>
        <div className="form-group">
          <label>Select Match</label>
          <select
            value={matchId}
            onChange={(e) => handleMatchSelect(e)}
            className="form-control"
          >
            <option value="">Select a match</option>
            {matchOptions.map((match) => (
              <option key={match.id} value={match.id}>
                {match.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-danger mt-3" disabled={!matchId}>
          Delete Match
        </button>
      </form>
    </div>
  );
}

export default MatchDelete;
