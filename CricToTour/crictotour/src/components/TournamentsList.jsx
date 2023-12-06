import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TournamentsList(){
    const [tournaments, setTournaments]=useState([]);

    useEffect(()=>{
        const apiurl ='http://localhost:3000/tournaments';

        fetch(apiurl)
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response is not ok');
            }
            return response.json();
        })
        .then((data)=>{
            // alert(JSON.stringify(data))
            setTournaments(data);
        })
        .catch((error)=>console.error('Error fetching tournaments:',error));
    },[]);

    return(
       <div>
            <h1 className="display-4">Tournaments List</h1>
            <div className="alert alert-info">
                This is a list of cricket tournaments.
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Tournament ID</th>
                    <th>Tournament Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Location</th>
                    <th>Tournament Type</th>
                    <th>Prize</th>
                    <th>Format</th>
                </tr>
                </thead>
                <tbody>
                    {tournaments.map((tournament) => (
                        <tr key={tournament.tourID}>
                        <td>{tournament.tourID}</td>
                        <td>{tournament.tourName}</td>
                        <td>{tournament.start_date}</td>
                        <td>{tournament.end_date}</td>
                        <td>{tournament.location}</td>
                        <td>{tournament.tour_type}</td>
                        <td>{tournament.prize}</td>
                        <td>{tournament.format.formatName}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
            <div className="mt-3">
                    <Link to="/tournamentadd" className="btn btn-primary">Add Tournament</Link>
                    <Link to="/tournamentupdate" className="btn btn-warning ml-3">Update Tournament</Link>
                    <Link to="/tournamentdelete" className="btn btn-danger ml-3">Delete Tournament</Link>
            </div>
       </div>
    )
};
export default TournamentsList