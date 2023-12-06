class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users, id: false do |t|
        t.bigserial :userID, null: false
        t.string :email , collation: 'default'
        t.string :firstName ,collation: 'default'
        t.string :lastName, collation: 'default'
        t.date :dateOfBirth
        t.string :gender, collation: 'default'
        t.string :country, collation: 'default'
      t.timestamps
    end
    execute <<-SQL
      Alter Table users
      Add Constraint users_pkey
      primary key ("userID");
    SQL
  end
end
