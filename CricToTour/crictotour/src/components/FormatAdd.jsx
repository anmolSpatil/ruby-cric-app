import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormatAdd() {
  const [formatData, setFormatData] = useState({
    formatName: '',
    numberOfOvers: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormatData({ ...formatData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/formats'; 
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatData),
      });

      if (response.ok) {
        navigate('/formats');
      } else {
        console.error('Error adding format');
      }
    } catch (error) {
      console.error('Error adding format:', error);
    }
  };

  return (
    <div>
      <h1 className="display-4">Add Format</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Format Name</label>
          <input
            type="text"
            name="formatName"
            value={formatData.formatName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Number of Overs</label>
          <input
            type="number"
            name="numberOfOvers"
            value={formatData.numberOfOvers}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formatData.description}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add Format
        </button>
      </form>
    </div>
  );
}

export default FormatAdd;
