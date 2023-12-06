class Venue < ApplicationRecord
  self.table_name = 'venues'

  has_many :matches, foreign_key: 'venueID'

  
  validates :venueName, presence: true
  validates :venueCountry, presence: true
  validates :venueCity, presence: true

end
