import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FormatsList() {
  const [formats, setFormats] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/formats'; 
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFormats(data);
      })
      .catch((error) => console.error('Error fetching formats:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Formats List</h1>
      <div className="alert alert-info">
        This is a list of formats.
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Format ID</th>
            <th>Format Name</th>
            <th>Number of Overs</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {formats.map((format) => (
            <tr key={format.formatID}>
              <td>{format.formatID}</td>
              <td>{format.formatName}</td>
              <td>{format.numberOfOvers}</td>
              <td>{format.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-3">
        <Link to="/formatadd" className="btn btn-primary">Add Format</Link>
        <Link to="/formatupdate" className="btn btn-warning ml-3">Update Format</Link>
        <Link to="/formatdelete" className="btn btn-danger ml-3">Delete Format</Link>
      </div>
    </div>
  );
}

export default FormatsList;
