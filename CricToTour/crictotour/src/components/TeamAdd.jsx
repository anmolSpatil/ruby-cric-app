import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TeamAdd() {
  const [teamData, setTeamData] = useState({
    teamName: '',
    players: '',
    captain: '',
    coach: '',
    country: '',
    city: '',
  });

  const navigate = useNavigate(); 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/teams'; 

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
      });

      if (response.ok) {
        
        navigate('/teams');
      } else {
        
        console.error('Error adding team');
      }
    } catch (error) {
      console.error('Error adding team:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Add Team</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Team Name</label>
          <input
            type="text"
            name="teamName"
            value={teamData.teamName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Players</label>
          <input
            type="text"
            name="players"
            value={teamData.players}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Captain</label>
          <input
            type="text"
            name="captain"
            value={teamData.captain}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Coach</label>
          <input
            type="text"
            name="coach"
            value={teamData.coach}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={teamData.country}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={teamData.city}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Team
        </button>
      </form>
    </div>
  );
}

export default TeamAdd;
