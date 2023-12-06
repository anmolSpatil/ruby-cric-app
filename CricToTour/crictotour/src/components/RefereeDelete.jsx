import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RefereeDelete() {
  const [refereeId, setRefereeId] = useState('');
  const [refereeOptions, setRefereeOptions] = useState([]);
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

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!refereeId) {
        alert('Please select a referee before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/referees/${refereeId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/referees');
      } else {
        console.error('Error deleting referee');
      }
    } catch (error) {
      console.error('Error deleting referee:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Referee</h1>
      <form onSubmit={handleDelete}>
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
        <button type="submit" className="btn btn-danger mt-3" disabled={!refereeId}>
          Delete Referee
        </button>
      </form>
    </div>
  );
}

export default RefereeDelete;
