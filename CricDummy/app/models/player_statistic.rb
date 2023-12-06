class PlayerStatistic < ApplicationRecord
self.table_name = 'player_statistics'



belongs_to :player, class_name: 'Player', foreign_key: 'playerID'
belongs_to :match, class_name: 'Match', foreign_key: 'matchID'
belongs_to :scorecard, class_name: 'Scorecard', foreign_key: 'scoreID'

validates :runsScored, presence: true, numericality: { greater_than_or_equal_to: 0 }
validates :wicketsTaken, presence: true, numericality: { greater_than_or_equal_to: 0 }
validates :ballsFaced, presence: true, numericality: { greater_than_or_equal_to: 0 }
validates :oversBowled, presence: true, numericality: { greater_than_or_equal_to: 0 }
validates :runsConceded, presence: true, numericality: { greater_than_or_equal_to: 0 }
validates :catchesTaken, presence: true, numericality: { greater_than_or_equal_to: 0 }
validates :stumpingsMade, presence: true, numericality: { greater_than_or_equal_to: 0 }


end
