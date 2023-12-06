import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TeamDelete() {
  const [teamId, setTeamId] = useState('');
  const [teamOptions, setTeamOptions] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    const apiUrl = 'http://localhost:3000/teams';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTeamOptions(data.map((team) => ({ id: team.teamID, name: team.teamName })));
      })
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  const handleTeamSelect = (e) => {
    setTeamId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!teamId) {
        alert('Please select a team before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/teams/${teamId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/teams');
      } else {
        console.error('Error deleting team');
      }
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Team</h1>
      <form onSubmit={handleDelete}>
        <div className="form-group">
          <label>Select Team</label>
          <select
            value={teamId}
            onChange={(e) => handleTeamSelect(e)}
            className="form-control"
          >
            <option value="">Select a team</option>
            {teamOptions.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-danger mt-3" disabled={!teamId}>
          Delete Team
        </button>
      </form>
    </div>
  );
}

export default TeamDelete;
