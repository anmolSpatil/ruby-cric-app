class Scorecard < ApplicationRecord
  # app/models/scorecard.rb

class Scorecard < ApplicationRecord

  self.table_name = 'scorecards'


  belongs_to :match, foreign_key: 'matchID', class_name: 'Match'
  belongs_to :player, foreign_key: 'playerOfMatch', class_name: 'Player'

  validates :playerOfMatch, presence: true
  validates :total_overs_team1, presence: true
  validates :total_runs_team1, presence: true
  validates :total_wickets_team1, presence: true
  validates :total_overs_team2, presence: true
  validates :total_runs_team2, presence: true
  validates :total_wickets_team2, presence: true
  validates :match_summary, presence: true


end

end
