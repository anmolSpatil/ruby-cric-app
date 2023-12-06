class CreateScorecards < ActiveRecord::Migration[7.1]
  def change
    create_table :scorecards, id: false do |t|
        t.bigserial :scoreID, null: false
        t.bigint :matchID
        t.bigint :playerOfMatch
        t.float :total_overs_team1
        t.bigint :total_runs_team1
        t.integer :total_wickets_team1, limit: 2
        t.float :total_overs_team2
        t.bigint :total_runs_team2
        t.integer :total_wickets_team2, limit: 2
        t.text :match_summary, collation: 'default'
        t.timestamps
    end
    execute <<-SQL
      Alter Table scorecards
      Add Constraint scorecards_pk
      Primary Key ("scoreID");
    SQL
    execute <<-SQL
      Alter Table scorecards
      Add Constraint fk_scorecards_match
      Foreign Key ("matchID") References matches ("matchID")
      ON DELETE CASCADE;
    SQL
    execute <<-SQL
      ALTER TABLE scorecards
      ADD CONSTRAINT fk_scorecards_playerOfMatch
      FOREIGN KEY ("playerOfMatch") REFERENCES players ("playerID")
      ON DELETE SET NULL;
    SQL
  end
end
