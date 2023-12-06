import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VenueUpdate() {
  const [venueId, setVenueId] = useState('');
  const [venueOptions, setVenueOptions] = useState([]);
  const [venueData, setVenueData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/venues';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVenueOptions(data.map((venue) => ({ id: venue.venueID, name: venue.venueName })));
      })
      .catch((error) => console.error('Error fetching venues:', error));
  }, []);

  const handleVenueSelect = (e) => {
    setVenueId(e.target.value);
  };

  useEffect(() => {
    if (venueId) {
      const apiUrl = `http://localhost:3000/venues/${venueId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setVenueData(data);
        })
        .catch((error) => console.error('Error fetching venue data:', error));
    }
  }, [venueId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!venueId) {
        alert('Please select a venue to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/venues/${venueId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(venueData),
      });

      if (response.ok) {
        navigate('/venues');
      } else {
        console.error('Error updating venue');
      }
    } catch (error) {
      console.error('Error updating venue:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenueData({ ...venueData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update Venue</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Select Venue</label>
          <select
            value={venueId}
            onChange={(e) => handleVenueSelect(e)}
            className="form-control"
          >
            <option value="">Select a venue</option>
            {venueOptions.map((venue) => (
              <option key={venue.id} value={venue.id}>
                {venue.name}
              </option>
            ))}
          </select>
        </div>
        {venueId && (
          <div>
            <div className="form-group">
              <label>Venue Name</label>
              <input
                type="text"
                name="venueName"
                value={venueData.venueName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="venueCity"
                value={venueData.venueCity || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                name="venueCountry"
                value={venueData.venueCountry || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update Venue
        </button>
      </form>
    </div>
  );
}

export default VenueUpdate;
