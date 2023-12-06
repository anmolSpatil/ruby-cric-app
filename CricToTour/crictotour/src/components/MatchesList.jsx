import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MatchesList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/matches';

    fetch(apiUrl)
      .then((response) => {
        // alert(JSON.parse(response))
        if (!response.ok) {
          throw new Error('Network response is not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMatches(data);
      })
      .catch((error) => console.error('Error fetching matches:', error));
  }, []);

  return (
    <div>
      <h1 className="display-4">Matches List</h1>
      <div className="alert alert-info">
        This is a list of cricket matches.
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Match ID</th>
            <th>Tournament Name</th>
            <th>Match Status</th>
            <th>Match Date Time</th>
            <th>Result</th>
            <th>Team 1</th>
            <th>Team 2</th>
            <th>Winning Team</th>
            <th>Referee</th>
            <th>Venue</th>
            <th>Player of the Match</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.matchID}>
              <td>{match.matchID}</td>
              <td>{match.tournament.tourName}</td>
              <td>{match.matchStatus}</td>
              <td>{match.matchDateTime}</td>
              <td>{match.result}</td>
              {/* <td>{match.team1.teamName}</td>
              <td>{match.team2.teamName}</td> */}
              <td>{match.winningTeam ? match.winningTeam.teamName : "N/A"}</td>
              <td>{match.referee ? match.referee.refereeName : "N/A"}</td>
              <td>{match.venue ? match.venue.venueName : "N/A"}</td>
              <td>{match.pom_player ? match.pom_player.playerName : "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-3">
        <Link to="/matchadd" className="btn btn-primary">Add Match</Link>
        <Link to="/matchupdate" className="btn btn-warning ml-3">Update Match</Link>
        <Link to="/matchdelete" className="btn btn-danger ml-3">Delete Match</Link>
      </div>
    </div>
  );
}

export default MatchesList;
