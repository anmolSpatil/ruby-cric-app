import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function VenuesList() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/venues';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVenues(data);
      })
      .catch((error) => console.error('Error fetching venues:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Venues List</h1>
      <div className="alert alert-info">
        This is a list of venues.
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Venue ID</th>
            <th>Venue Name</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.venueID}>
              <td>{venue.venueID}</td>
              <td>{venue.venueName}</td>
              <td>{venue.venueCity}</td>
              <td>{venue.venueCountry}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-3">
        <Link to="/venueadd" className="btn btn-primary">Add Venue</Link>
        <Link to="/venueupdate" className="btn btn-warning ml-3">Update Venue</Link>
        <Link to="/venuedelete" className="btn btn-danger ml-3">Delete Venue</Link>
      </div>
    </div>
  );
}

export default VenuesList;
