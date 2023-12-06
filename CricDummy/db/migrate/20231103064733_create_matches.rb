class CreateMatches < ActiveRecord::Migration[7.1]
  def up
    create_table :matches, id: false do |t|
        t.bigserial :matchID, null: false
        t.bigint :tourID
        t.string :matchStatus
        t.timestamp :matchDateTime, null: false, default: -> { 'CURRENT_TIMESTAMP' }
        t.string :result, collation: 'default'
        t.bigint :team1ID
        t.bigint :team2ID
        t.bigint :winningTeamID, null:true
        t.bigint :refereeID
        t.bigint :venueID
        t.bigint :pom_playerID
      t.timestamps
    end

    execute <<-SQL
      Alter Table matches
      Add constraint matches_pkey
      PRIMARY KEY ("matchID");
    SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_tournament
      Foreign Key ("tourID") References tournaments ("tourID")
      ON DELETE CASCADE;
    SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_team1
      Foreign Key ("team1ID") References teams ("teamID")
      ON DELETE SET NULL;
    SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_team2
      Foreign Key ("team2ID") References teams ("teamID")
      ON DELETE SET NULL;
    SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_teamW
      Foreign Key ("winningTeamID") References teams ("teamID")
      ON DELETE SET NULL;
    SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_teamP
      Foreign Key ("pom_playerID") References teams ("teamID")
      ON DELETE SET NULL;
     SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_venue
      Foreign Key ("venueID") References venues ("venueID")
      ON DELETE SET NULL;
    SQL
    execute <<-SQL
      Alter Table matches
      Add constraint fk_matches_referee
      Foreign Key ("refereeID") References referees ("refereeID")
      ON DELETE SET NULL;
    SQL
  end
  def down
    execute "Drop table if exists matches cascade"
  end
end
