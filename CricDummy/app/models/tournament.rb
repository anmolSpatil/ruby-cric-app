class Tournament < ApplicationRecord

  self.table_name = 'tournaments'

  belongs_to :format, foreign_key: 'formatID', class_name: 'Format'

  has_and_belongs_to_many :tournaments
  has_many :matches,class_name: 'Match', foreign_key: 'tourID'

end
