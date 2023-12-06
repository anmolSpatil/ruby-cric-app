import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FormatDelete() {
  const [formatId, setFormatId] = useState('');
  const [formatOptions, setFormatOptions] = useState([]);
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

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      if (!formatId) {
        alert('Please select a format before deleting.');
        return;
      }

      const apiUrl = `http://localhost:3000/formats/${formatId}`;

      const response = await fetch(apiUrl, {
        method: 'DELETE',
      });

      if (response.ok) {
        navigate('/formats');
      } else {
        console.error('Error deleting format');
      }
    } catch (error) {
      console.error('Error deleting format:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Delete Format</h1>
      <form onSubmit={handleDelete}>
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
        <button type="submit" className="btn btn-danger mt-3" disabled={!formatId}>
          Delete Format
        </button>
      </form>
    </div>
  );
}

export default FormatDelete;
