import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RefereeUpdate() {
  const [refereeId, setRefereeId] = useState('');
  const [refereeOptions, setRefereeOptions] = useState([]);
  const [refereeData, setRefereeData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/referees';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRefereeOptions(data.map((referee) => ({ id: referee.refereeID, name: referee.refereeName })));
      })
      .catch((error) => console.error('Error fetching referees:', error));
  }, []);

  const handleRefereeSelect = (e) => {
    setRefereeId(e.target.value);
  };

  useEffect(() => {
    if (refereeId) {
      const apiUrl = `http://localhost:3000/referees/${refereeId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setRefereeData(data);
        })
        .catch((error) => console.error('Error fetching referee data:', error));
    }
  }, [refereeId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!refereeId) {
        alert('Please select a referee to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/referees/${refereeId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(refereeData),
      });

      if (response.ok) {
        navigate('/referees');
      } else {
        console.error('Error updating referee');
      }
    } catch (error) {
      console.error('Error updating referee:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRefereeData({ ...refereeData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update Referee</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Select Referee</label>
          <select
            value={refereeId}
            onChange={(e) => handleRefereeSelect(e)}
            className="form-control"
          >
            <option value="">Select a referee</option>
            {refereeOptions.map((referee) => (
              <option key={referee.id} value={referee.id}>
                {referee.name}
              </option>
            ))}
          </select>
        </div>
        {refereeId && (
          <div>
            <div className="form-group">
              <label>Referee Name</label>
              <input
                type="text"
                name="refereeName"
                value={refereeData.refereeName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="text"
                name="dateOfBirth"
                value={refereeData.dateOfBirth || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                name="nationality"
                value={refereeData.nationality || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Matches Officiated</label>
              <input
                type="text"
                name="matchesOfficiated"
                value={refereeData.matchesOfficiated || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update Referee
        </button>
      </form>
    </div>
  );
}

export default RefereeUpdate;
