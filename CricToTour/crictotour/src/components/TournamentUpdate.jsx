import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TournamentUpdate() {
  const [tournamentId, setTournamentId] = useState('');
  const [tournamentOptions, setTournamentOptions] = useState([]);
  const [tournamentData, setTournamentData] = useState({});
  const [formatOptions, setFormatOptions] = useState([]); 
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

 
  useEffect(() => {
    const apiUrl = 'http://localhost:3000/formats';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFormatOptions(data.map((format) => ({ id: format.formatID, name: format.formatName })));
      })
      .catch((error) => console.error('Error fetching formats:', error));
  }, []);

  const handleTournamentSelect = (e) => {
    setTournamentId(e.target.value);
  };

  useEffect(() => {
    if (tournamentId) {
      const apiUrl = `http://localhost:3000/tournaments/${tournamentId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setTournamentData(data);
        })
        .catch((error) => console.error('Error fetching tournament data:', error));
    }
  }, [tournamentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!tournamentId) {
        alert('Please select a tournament to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/tournaments/${tournamentId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournamentData), 
      });

      if (response.ok) {
        navigate('/tournaments');
      } else {
        console.error('Error updating tournament');
      }
    } catch (error) {
      console.error('Error updating tournament:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTournamentData({ ...tournamentData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update Tournament</h1>
      <form onSubmit={handleUpdate}>
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
        {tournamentId && (
          <div>
            <div className="form-group">
              <label>Tournament Name</label>
              <input
                type="text"
                name="tourName"
                value={tournamentData.tourName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="start_date"
                value={tournamentData.start_date || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="end_date"
                value={tournamentData.end_date || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={tournamentData.location || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Tournament Type</label>
              <input
                type="text"
                name="tour_type"
                value={tournamentData.tour_type || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Prize</label>
              <input
                type="text"
                name="prize"
                value={tournamentData.prize || ''}
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
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update Tournament
        </button>
      </form>
    </div>
  );
}

export default TournamentUpdate;
