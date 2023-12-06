class Format < ApplicationRecord
  self.table_name = 'formats'

  has_many :tournaments, foreign_key: 'formatID', class_name: 'Tournament'

  validates :formatName, presence: true
  validates :numberOfOvers, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :description, presence:true

end
