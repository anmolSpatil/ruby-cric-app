class CreateVenues < ActiveRecord::Migration[7.1]
  def change
    create_table :venues, id: false do |t|
        t.bigserial :venueID, null: false
        t.string :venueName, collation: 'default'
        t.string :venueCity, collation: 'default'
        t.string :venueCountry, collation: 'default'

      t.timestamps
    end

    execute <<-SQL
      Alter Table venues
      Add Constraint Venue_pkey
      Primary key("venueID");
    SQL
  end
end
