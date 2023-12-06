class CreateReferees < ActiveRecord::Migration[7.1]
  def change
    create_table :referees, id: false do |t|
        t.bigserial :refereeID, null:false
        t.string :refereeName, collation: 'default'
        t.date :dateOfBirth
        t.string :nationality, collation: 'default'
        t.bigint :matchesOfficiated
        t.timestamps
    end
    execute <<-SQL
    Alter table referees
    Add Constraint referee_pkey
    Primary key ("refereeID");
    SQL
  end
end
