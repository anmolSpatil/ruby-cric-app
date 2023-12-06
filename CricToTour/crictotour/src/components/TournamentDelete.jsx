import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TournamentDelete() {
  const [tournamentId, setTournamentId] = useState('');
  const [tournamentOptions, setTournamentOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/tournaments';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTournamentOptions(data.map((tournament) => ({ id: tournament.tourID, name: tournament.tourName })));
      })
      .catch((error) => console.error('Error fetching tournaments:', error));
  }, []);

  const handleTournamentSelect = (e) => {
    setTournamentId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!tournamentId) {
        alert('Please select a tournament to delete.');
        return;
      }

      const apiUrl = `http://localhost:3000/tournaments/${tournamentId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/tournaments');
      } else {
        console.error('Error deleting tournament');
      }
    } catch (error) {
      console.error('Error deleting tournament:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Tournament</h1>
      <form onSubmit={handleDelete}>
        <div className="form-group">
          <label>Select Tournament</label>
          <select
            value={tournamentId}
            onChange={(e) => handleTournamentSelect(e)}
            className="form-control"
          >
            <option value="">Select a tournament</option>
            {tournamentOptions.map((tournament) => (
              <option key={tournament.id} value={tournament.id}>
                {tournament.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-danger mt-3" disabled={!tournamentId}>
          Delete Tournament
        </button>
      </form>
    </div>
  );
}

export default TournamentDelete;
