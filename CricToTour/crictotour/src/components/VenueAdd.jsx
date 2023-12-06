import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VenueAdd() {
  const [venueData, setVenueData] = useState({
    venueName: '',
    venueCity: '',
    venueCountry: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenueData({ ...venueData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/venues';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(venueData),
      });

      if (response.ok) {
        navigate('/venues');
      } else {
        console.error('Error adding venue');
      }
    } catch (error) {
      console.error('Error adding venue:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Add Venue</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Venue Name</label>
          <input
            type="text"
            name="venueName"
            value={venueData.venueName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="venueCity"
            value={venueData.venueCity}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="venueCountry"
            value={venueData.venueCountry}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Venue
        </button>
      </form>
    </div>
  );
}

export default VenueAdd;
