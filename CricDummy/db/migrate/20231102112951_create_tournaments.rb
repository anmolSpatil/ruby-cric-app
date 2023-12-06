class CreateTournaments < ActiveRecord::Migration[7.1]
  def up
    create_table :tournaments, id: false do |t|
      t.bigserial :tourID, null: false
      t.string :tourName, collation: 'default'
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.string :location, collation: 'default'
      t.string :tour_type, collation: 'default'
      t.string :prize, null: false
      t.bigint :formatID

      t.timestamps
    end

    execute <<-SQL
      ALTER TABLE tournaments
      ADD PRIMARY KEY ("tourID");
    SQL

    # execute <<-SQL
    #   ALTER TABLE tournaments
    #   ADD CONSTRAINT check_prize_greater_than_zero
    #   CHECK (prize > 0);
    # SQL

    execute <<-SQL
      ALTER TABLE tournaments
      ADD CONSTRAINT fk_tournaments_format
      FOREIGN KEY ("formatID") REFERENCES formats ("formatID")
      ON DELETE SET NULL;
    SQL
  end
  def down
    execute "DROP TABLE IF EXISTS tournaments CASCADE"
  end
end
