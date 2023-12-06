import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TournamentAdd() {
  const [tournamentData, setTournamentData] = useState({
    tourName: '',
    start_date: '',
    end_date: '',
    location: '',
    tour_type: '',
    prize: '',
    formatID: '', 
  });

  const [formatOptions, setFormatOptions] = useState([]); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const apiUrl = 'http://localhost:3000/formats';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFormatOptions(data.map((format) => ({ id: format.id, name: format.formatName })));
      })
      .catch((error) => console.error('Error fetching formats:', error));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/tournaments';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournamentData),
      });

      if (response.ok) {
        navigate('/tournaments');
      } else {
        console.error('Error creating tournament');
      }
    } catch (error) {
      console.error('Error creating tournament:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTournamentData({ ...tournamentData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Create Tournament</h1>
      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label>Tournament Name</label>
          <input
            type="text"
            name="tourName"
            value={tournamentData.tourName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Start Date</label>
          <input
            type="date"
            name="start_date"
            value={tournamentData.start_date}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="end_date"
            value={tournamentData.end_date}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={tournamentData.location}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tournament Type</label>
          <input
            type="text"
            name="tour_type"
            value={tournamentData.tour_type}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Prize</label>
          <input
            type="text"
            name="prize"
            value={tournamentData.prize}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Format Name</label>
          <select
            name="formatID"
            value={tournamentData.formatID}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select a format</option>
            {formatOptions.map((format) => (
              <option key={format.id} value={format.id}>
                {format.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Create Tournament
        </button>
      </form>
    </div>
  );
}

export default TournamentAdd;
