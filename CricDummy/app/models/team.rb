class Team < ApplicationRecord
  self.table_name = 'teams'

   has_many :tournament, foreign_key: 'teamID', class_name: 'Tournament'
   has_many :home_matches, foreign_key: 'team1ID', class_name: 'Match'
   has_many :away_matches, foreign_key: 'team2ID', class_name: 'Match'
   has_many :player, foreign_key: 'teamID', class_name: 'Player'
   has_many :winning_matches, foreign_key: 'winningTeamID', class_name: 'Match'
   has_and_belongs_to_many :tournaments, foreign_key: 'team_id', class_name: 'TeamsTournament'


  validates :teamName, presence: true
  validates :players, presence: true, numericality: { greater_than_or_equal_to: 0}
  validates :captain, presence: true
end
