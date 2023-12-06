import React from 'react';
import { Link } from 'react-router-dom';

const tableRoutes = [
  { tableName: 'Teams', route: 'teams' },
  { tableName: 'Formats', route: 'formats' },
  { tableName: 'Matches', route: 'matches' },
  { tableName: 'PlayerStatistics', route: 'player-statistics' },
  { tableName: 'Players', route: 'players' },
  { tableName: 'Referees', route: 'referees' },
  { tableName: 'Scorecards', route: 'scorecards' },
  { tableName: 'TeamTournament', route: 'teams_tournaments' },
  { tableName: 'Tournaments', route: 'tournaments' },
  { tableName: 'Users', route: 'users' },
  { tableName: 'Venues', route: 'venues' },
  
];

const AdminDashboard = () => {
  const containerStyle = {
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
  };

  return (
    <div style={{ backgroundColor: '#CCFF99' }}>
       <center><h2 className="mt-4 mb-4">Database Tables</h2></center>
      <div className="container" style={containerStyle}>
       
        <div className="row">
          {tableRoutes.map(({ tableName, route }) => (
            <div key={tableName} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
              <div className="card h-100 bg-light">
                <div className="card-body">
                  <h6 className="card-title">{tableName}</h6>
                  <Link to={`/${route}`} className="btn btn-primary">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
