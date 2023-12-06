import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TeamUpdate() {
  const [teamId, setTeamId] = useState('');
  const [teamOptions, setTeamOptions] = useState([]);
  const [teamData, setTeamData] = useState({});
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

  useEffect(() => {
    if (teamId) {
      const apiUrl = `http://localhost:3000/teams/${teamId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setTeamData(data);
        })
        .catch((error) => console.error('Error fetching team data:', error));
    }
  }, [teamId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!teamId) {
        alert('Please select a team to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/teams/${teamId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData), 
      });

      if (response.ok) {
        navigate('/teams');
      } else {
        console.error('Error updating team');
      }
    } catch (error) {
      console.error('Error updating team:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update Team</h1>
      <form onSubmit={handleUpdate}>
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
        {teamId && (
          <div>
            <div className="form-group">
              <label>Team Name</label>
              <input
                type="text"
                name="teamName"
                value={teamData.teamName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Players</label>
              <input
                type="number"
                name="players"
                value={teamData.players || 0}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Captain</label>
              <input
                type="text"
                name="captain"
                value={teamData.captain || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Coach</label>
              <input
                type="text"
                name="coach"
                value={teamData.coach || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={teamData.country || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={teamData.city || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update Team
        </button>
      </form>
    </div>
  );
}

export default TeamUpdate;
