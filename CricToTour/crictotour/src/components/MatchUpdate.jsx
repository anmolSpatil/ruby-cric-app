import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MatchUpdate() {
  const [matchId, setMatchId] = useState('');
  const [matchOptions, setMatchOptions] = useState([]);
  const [matchData, setMatchData] = useState({});
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [referees, setReferees] = useState([]);
  const [venues, setVenues] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/matches';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setMatchOptions(data.map((match) => ({ id: match.matchID, name: match.matchID })));
      })
      .catch((error) => console.error('Error fetching matches:', error));
  }, []);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/players';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((error) => console.error('Error fetching players:', error));
  }, []);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/teams';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/referees';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setReferees(data);
      })
      .catch((error) => console.error('Error fetching referees:', error));
  }, []);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/venues';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVenues(data);
      })
      .catch((error) => console.error('Error fetching venues:', error));
  }, []);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/tournaments';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTournaments(data);
      })
      .catch((error) => console.error('Error fetching tournaments:', error));
  }, []);

  const handleMatchSelect = (e) => {
    setMatchId(e.target.value);
  };

  useEffect(() => {
    if (matchId) {
      const apiUrl = `http://localhost:3000/matches/${matchId}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setMatchData(data);
        })
        .catch((error) => console.error('Error fetching match data:', error));
    }
  }, [matchId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (!matchId) {
        alert('Please select a match to update.');
        return;
      }

      const apiUrl = `http://localhost:3000/matches/${matchId}`;

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(matchData),
      });

      if (response.ok) {
        navigate('/matches');
      } else {
        console.error('Error updating match');
      }
    } catch (error) {
      console.error('Error updating match:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMatchData({ ...matchData, [name]: value });
  };

  return (
      <div>
        <h1 className="display-4">Update Match</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Select Match</label>
            <select
              value={matchId}
              onChange={(e) => handleMatchSelect(e)}
              className="form-control"
            >
              <option value="">Select a match</option>
              {matchOptions.map((match) => (
                <option key={match.id} value={match.id}>
                  {match.name}
                </option>
              ))}
            </select>
          </div>
          {matchId && (
            <div>
                <div className="form-group">
                <label>Tournament ID</label>
                <select
                  name="tourID"
                  value={matchData.tourID || ''}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select a tournament</option>
                  {tournaments.map((tournament) => (
                    <option key={tournament.tourID} value={tournament.tourID}>
                      {tournament.tourName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Match Status</label>
                <input
                  type="text"
                  name="matchStatus"
                  value={matchData.matchStatus || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Match Date and Time</label>
                <input
                  type="datetime-local"
                  name="matchDateTime"
                  value={matchData.matchDateTime || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Result</label>
                <input
                  type="text"
                  name="result"
                  value={matchData.result || ''}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Team 1 ID</label>
                <select
                  name="team1ID"
                  value={matchData.team1ID || ''}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select a team</option>
                  {teams.map((team) => (
                    <option key={team.teamID} value={team.teamID}>
                      {team.teamName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Team 2 ID</label>
                <select
                  name="team2ID"
                  value={matchData.team2ID || ''}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select a team</option>
                  {teams.map((team) => (
                    <option key={team.teamID} value={team.teamID}>
                      {team.teamName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Winning Team ID</label>
                <select
                  name="winningTeamID"
                  value={matchData.winningTeamID || ''}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select a team</option>
                  {teams.map((team) => (
                    <option key={team.teamID} value={team.teamID}>
                      {team.teamName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Referee ID</label>
                <select
                  name="refereeID"
                  value={matchData.refereeID || ''}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select a referee</option>
                  {referees.map((referee) => (
                    <option key={referee.refereeID} value={referee.refereeID}>
                      {referee.refereeName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Venue ID</label>
                <select
                  name="venueID"
                  value={matchData.venueID || ''}
                  onChange={handleInputChange}
                  className="form-control"
                >
                  <option value="">Select a venue</option>
                  {venues.map((venue) => (
                    <option key={venue.venueID} value={venue.venueID}>
                      {venue.venueName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Player of the Match</label>
                <select
                  name="pom_playerID"
                  value={matchData.pom_playerID || ''}
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
            </div>
          )}
          <button type="submit" className="btn btn-primary mt-3">
            Update Match
          </button>
        </form>
      </div>
  );
}

export default MatchUpdate;
