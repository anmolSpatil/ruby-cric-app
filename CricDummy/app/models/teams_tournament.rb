class TeamsTournament < ApplicationRecord
self.table_name = 'teams_tournaments'

belongs_to :tournament, foreign_key: 'tournament_id', class_name: 'Tournament'
belongs_to :team, foreign_key: 'team_id', class_name: 'Team'

validates :team_id, presence: true
validates :tournament_id, presence: true

end
