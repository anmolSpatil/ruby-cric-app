import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RefereeAdd() {
  const [refereeData, setRefereeData] = useState({
    refereeName: '',
    dateOfBirth: '',
    nationality: '',
    matchesOfficiated: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRefereeData({ ...refereeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/referees';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(refereeData),
      });

      if (response.ok) {
        navigate('/referees');
      } else {
        console.error('Error adding referee');
      }
    } catch (error) {
      console.error('Error adding referee:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Add Referee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Referee Name</label>
          <input
            type="text"
            name="refereeName"
            value={refereeData.refereeName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="text"
            name="dateOfBirth"
            value={refereeData.dateOfBirth}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Nationality</label>
          <input
            type="text"
            name="nationality"
            value={refereeData.nationality}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Matches Officiated</label>
          <input
            type="text"
            name="matchesOfficiated"
            value={refereeData.matchesOfficiated}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Referee
        </button>
      </form>
    </div>
  );
}

export default RefereeAdd;
