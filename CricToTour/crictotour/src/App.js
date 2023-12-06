import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './components/AdminDashBoard';
import TeamList from './components/TeamList';
import TeamUpdate from './components/TeamUpdate';
import { Route, Routes } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import TeamAdd from './components/TeamAdd';
import TeamDelete from './components/TeamDelete';
import Homepage from './components/Homepage';
import PlayersList from './components/PlayersList';
import PlayerAdd from './components/PlayerAdd';
import PlayerDelete from './components/PlayerDelete';
import PlayerUpdate from './components/PlayerUpdate';
import TournamentsList from './components/TournamentsList';
import TournamentUpdate from './components/TournamentUpdate';
import TournamentAdd from './components/TournamentAdd';
import UserRegistration from './components/UserRegistration';
import LoginUser from './components/LoginUser';
import MatchAdd from './components/MatchAdd';
import MatchUpdate from './components/MatchUpdate';
import FormatsList from './components/FormatsList';
import FormatAdd from './components/FormatAdd';
import FormatDelete from './components/FormatDelete';
import FormatUpdate from './components/FormatUpdate';
import VenuesList from './components/VenuesList';
import VenueAdd from './components/VenueAdd';
import VenueDelete from './components/VenueDelete';
import VenueUpdate from './components/VenueUpdate';
import RefereesList from './components/RefereesList';
import RefereeDelete from './components/RefereeDelete';
import RefereeAdd from './components/RefereeAdd';
import RefereeUpdate from './components/RefereeUpdate';
import UsersList from './components/UsersList';
import UserDelete from './components/UserDelete';
import UserAdd from './components/UserAdd';
import UserUpdate from './components/UserUpdate';
import MatchesList from './components/MatchesList';
import MatchDelete from './components/MatchDelete';
import TournamentDelete from './components/TournamentDelete';




function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teams" element={<TeamList/>}/>
        <Route path="/teamupdate" element={<TeamUpdate/>}/>
        <Route path="/teamadd" element={<TeamAdd/>}/>
        <Route path="/teamdelete" element={<TeamDelete/>}/>
        <Route path="/players" element={<PlayersList/>}/>
        <Route path="/playeradd" element={<PlayerAdd/>}/>
        <Route path="/playerdelete" element={<PlayerDelete/>}/>
        <Route path="/playerupdate" element={<PlayerUpdate/>}/>
        <Route path="/tournaments" element={<TournamentsList/>}/>
        <Route path="/tournamentupdate" element={<TournamentUpdate/>}/>
        <Route path="/tournamentadd" element={<TournamentAdd/>}/>
        <Route path="/tournamentdelete" element={<TournamentDelete/>}/>
        <Route path="/signup" element={<UserRegistration/>}/>
        <Route path="/login" element={<LoginUser/>}/> 
        {/* <Route path="/matches" element={<Match/>}/> */}
        <Route path="/matchesadd" element={<MatchAdd/>}/>
        <Route path="/macthesupdate" element={<MatchUpdate/>}/>
        <Route path="/formats" element={<FormatsList/>}/>
        <Route path="/formatdelete" element={<FormatDelete/>}/>
        <Route path="/formatadd" element={<FormatAdd/>}/>
        <Route path="/formatupdate" element={<FormatUpdate/>}/>
        <Route path="/venues" element={<VenuesList/>}/>
        <Route path="/venuedelete" element={<VenueDelete/>}/>
        <Route path="/venueadd" element={<VenueAdd/>}/>
        <Route path="/venueupdate" element={<VenueUpdate/>}/>
        <Route path="/referees" element={<RefereesList/>}/>
        <Route path="/refereedelete" element={<RefereeDelete/>}/>
        <Route path="/refereeadd" element={<RefereeAdd/>}/>
        <Route path="/refereeupdate" element={<RefereeUpdate/>}/>
        <Route path="/users" element={<UsersList/>}/>
        <Route path="/userdelete" element={<UserDelete/>}/>
        <Route path="/useradd" element={<UserAdd/>}/>
        <Route path="/userupdate" element={<UserUpdate/>}/>
        <Route path="/matches" element={<MatchesList/>}/>
        <Route path="/matchadd" element={<MatchAdd/>}/>
        <Route path="/matchupdate" element={<MatchUpdate/>}/>
        <Route path="/matchdelete" element={<MatchDelete/>}/>






        
      </Routes>
    </Router>
  );
}

export default App;
