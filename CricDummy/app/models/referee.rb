class Referee < ApplicationRecord

  self.table_name = 'referees'

  has_many :matches, foreign_key: 'refereeID', class_name: 'Match'

  
  validates :refereeName, presence: true
  validates :dateOfBirth, presence: true
  validates :matchesOfficiated, presence: true
  validates :nationality, presence: true

end
