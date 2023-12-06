class Login < ApplicationRecord
  self.table_name = 'logins'

  belongs_to :user, foreign_key: 'userID'

  validates :userID, presence: true, uniqueness: true
  validates :password, presence: true

  def self.authenticate(login_id, password)
    user = find_by(loginID: login_id)

    if user && user.password == password
      return user
    else
      return nil
    end
  end
end
