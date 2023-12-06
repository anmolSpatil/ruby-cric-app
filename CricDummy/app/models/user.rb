class User < ApplicationRecord
  self.table_name = 'users'
  has_one :login, foreign_key: 'userID'
end
