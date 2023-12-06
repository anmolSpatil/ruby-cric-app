import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FormatUpdate() {
  const [formatId, setFormatId] = useState('');
  const [formatOptions, setFormatOptions] = useState([]);
  const [formatData, setFormatData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/formats';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFormatOptions(data.map((format) => ({ id: format.formatID, name: format.formatName })));
      })
      .catch((error) => console.error('Error fetching formats:', error));
  }, []);

  const handleFormatSelect = (e) => {
    setFormatId(e.target.value);
  };

  useEffect(() => {
    if (formatId) {
      const apiUrl = `http://localhost:3000/formats/${formatId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setFormatData(data);
        })
        .catch((error) => console.error('Error fetching format data:', error));
    }
  }, [formatId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!formatId) {
        alert('Please select a format to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/formats/${formatId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatData),
      });

      if (response.ok) {
        navigate('/formats');
      } else {
        console.error('Error updating format');
      }
    } catch (error) {
      console.error('Error updating format:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormatData({ ...formatData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Update Format</h1>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Select Format</label>
          <select
            value={formatId}
            onChange={(e) => handleFormatSelect(e)}
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
        {formatId && (
          <div>
            <div className="form-group">
              <label>Format Name</label>
              <input
                type="text"
                name="formatName"
                value={formatData.formatName || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Number of Overs</label>
              <input
                type="number"
                name="numberOfOvers"
                value={formatData.numberOfOvers || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formatData.description || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-3">
          Update Format
        </button>
      </form>
    </div>
  );
}

export default FormatUpdate;
