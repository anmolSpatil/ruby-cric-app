class Player < ApplicationRecord

  self.table_name = 'players'

  belongs_to :team, foreign_key: 'teamID'

  has_many :scorecards, foreign_key: 'playerOfMatch', class_name: 'Scorecard'
  has_many :matches, foreign_key: 'pom_playerID', class_name: 'Match'


  validates :playerName, presence: true
  validates :dateOfBirth, presence: true
  validates :country, presence:true
  validates :teamID, presence:true
  validates :jerseyNO, presence: true
  validates :runsScored, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :wicketsTaken, presence: true, numericality: {greater_than_or_equal_to: 0 }
  validates :matchesPlayed, presence: true, numericality: { greater_than_or_equal_to: 0 }



end
