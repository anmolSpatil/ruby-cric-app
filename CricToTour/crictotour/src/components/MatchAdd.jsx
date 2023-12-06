import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MatchAdd() {
  const [matchData, setMatchData] = useState({
    tourID: '',
    matchDateTime: '',
    matchStatus: '',
    result: '',
    team1ID: '',
    team2ID: '',
    winningTeamID: '',
    refereeID: '',
    venueID: '',
    pom_playerID: '',
  });

  const [tournamentOptions, setTournamentOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);
  const [refereeOptions, setRefereeOptions] = useState([]);
  const [venueOptions, setVenueOptions] = useState([]);
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const apiUrl = 'http://localhost:3000/players';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((error) => console.error('Error fetching players:', error));



    
    const tournamentsUrl = 'http://localhost:3000/tournaments';
    fetch(tournamentsUrl)
      .then((response) => response.json())
      .then((data) => {
        setTournamentOptions(data.map((tournament) => ({ id: tournament.tourID, name: tournament.tourName })));
      })
      .catch((error) => console.error('Error fetching tournaments:', error));

   
    const teamsUrl = 'http://localhost:3000/teams';
    fetch(teamsUrl)
      .then((response) => response.json())
      .then((data) => {
        setTeamOptions(data.map((team) => ({ id: team.teamID, name: team.teamName })));
      })
      .catch((error) => console.error('Error fetching teams:', error));

    
    const refereesUrl = 'http://localhost:3000/referees';
    fetch(refereesUrl)
      .then((response) => response.json())
      .then((data) => {
        setRefereeOptions(data.map((referee) => ({ id: referee.refereeID, name: referee.refereeName })));
      })
      .catch((error) => console.error('Error fetching referees:', error));

    
    const venuesUrl = 'http://localhost:3000/venues';
    fetch(venuesUrl)
      .then((response) => response.json())
      .then((data) => {
        setVenueOptions(data.map((venue) => ({ id: venue.venueID, name: venue.venueName })));
      })
      .catch((error) => console.error('Error fetching venues:', error));
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:3000/matches';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(matchData),
      });

      if (response.ok) {
        navigate('/matches');
      } else {
        console.error('Error creating match');
      }
    } catch (error) {
      console.error('Error creating match:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchData({ ...matchData, [name]: value });
  };

  return (
    <div>
      <h1 className="display-4">Create Match</h1>
      <form onSubmit={handleCreate}>
      <form onSubmit={handleCreate}>
  <div className="form-group">
    <label>Tournament</label>
    <select
      name="tourID"
      value={matchData.tourID}
      onChange={handleInputChange}
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
  <div className="form-group">
    <label>Match Date and Time</label>
    <input
      type="datetime-local"
      name="matchDateTime"
      value={matchData.matchDateTime}
      onChange={handleInputChange}
      className="form-control"
    />
  </div>
  <div className="form-group">
    <label>Match Status</label>
    <input
      type="text"
      name="matchStatus"
      value={matchData.matchStatus}
      onChange={handleInputChange}
      className="form-control"
    />
  </div>
  <div className="form-group">
    <label>Result</label>
    <input
      type="text"
      name="result"
      value={matchData.result}
      onChange={handleInputChange}
      className="form-control"
    />
  </div>
  <div className="form-group">
    <label>Team 1</label>
    <select
      name="team1ID"
      value={matchData.team1ID}
      onChange={handleInputChange}
      className="form-control"
    >
      <option value="">Select a team</option>
      {teamOptions.map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Team 2</label>
    <select
      name="team2ID"
      value={matchData.team2ID}
      onChange={handleInputChange}
      className="form-control"
    >
      <option value="">Select a team</option>
      {teamOptions.map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Winning Team</label>
    <select
      name="winningTeamID"
      value={matchData.winningTeamID}
      onChange={handleInputChange}
      className="form-control"
    >
      <option value="">Select a team</option>
      {teamOptions.map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Referee</label>
    <select
      name="refereeID"
      value={matchData.refereeID}
      onChange={handleInputChange}
      className="form-control"
    >
      <option value="">Select a referee</option>
      {refereeOptions.map((referee) => (
        <option key={referee.id} value={referee.id}>
          {referee.name}
        </option>
      ))}
    </select>
  </div>
  <div className="form-group">
    <label>Venue</label>
    <select
      name="venueID"
      value={matchData.venueID}
      onChange={handleInputChange}
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
  <div className="form-group">
  <label>Player of the Match</label>
  <select
    name="pom_playerID"
    value={matchData.pom_playerID}
    onChange={handleInputChange}
    className="form-control"
  >
    <option value="">Select a player</option>
    {players.map((player) => (
      <option key={player.playerID} value={player.playerID}>
        {player.playerName}
      </option>
    ))}
  </select>
</div>

  <button type="submit" className="btn btn-primary mt-3">
    Create Match
  </button>
</form>

      </form>
    </div>
  );
}

export default MatchAdd;
