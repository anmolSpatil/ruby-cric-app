import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function VenueDelete() {
  const [venueId, setVenueId] = useState('');
  const [venueOptions, setVenueOptions] = useState([]);
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

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!venueId) {
        alert('Please select a venue before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/venues/${venueId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/venues');
      } else {
        console.error('Error deleting venue');
      }
    } catch (error) {
      console.error('Error deleting venue:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Venue</h1>
      <form onSubmit={handleDelete}>
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
        <button type="submit" className="btn btn-danger mt-3" disabled={!venueId}>
          Delete Venue
        </button>
      </form>
    </div>
  );
}

export default VenueDelete;
