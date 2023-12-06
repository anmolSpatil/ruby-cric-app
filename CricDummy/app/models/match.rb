class Match < ApplicationRecord

  self.table_name = 'matches'



  has_one :scorecard, foreign_key: 'matchID'
  has_many :player_statistics, foreign_key: 'matchID'

  belongs_to :team1, class_name: 'Team', foreign_key: 'team1ID'
  belongs_to :team2, class_name: 'Team', foreign_key: 'team2ID'
  belongs_to :tournament, foreign_key: 'tourID'
  belongs_to :venue, foreign_key: 'venueID', optional: true
  belongs_to :winning_team, class_name: 'Team', foreign_key: 'winningTeamID', optional: true
  belongs_to :referee, foreign_key: 'refereeID', optional:true
  belongs_to :pom_player, foreign_key: 'pom_playerID', optional: true, class_name: 'Player'



end
