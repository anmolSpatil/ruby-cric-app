class CreatePlayerStatistics < ActiveRecord::Migration[7.1]
  def change
    create_table :player_statistics, id: false do |t|
        t.bigserial :playerStatisticsID, null: false
        t.bigint :playerID
        t.bigint :matchID
        t.bigint :runsScored
        t.bigint :wicketsTaken
        t.bigint :ballsFaced
        t.float :oversBowled
        t.bigint :runsConceded
        t.integer :catchesTaken, limit: 2
        t.integer :stumpingsMade, limit: 2
        t.bigint :scoreID
        t.timestamps
    end
    execute <<-SQL
      ALTER TABLE player_statistics
      ADD CONSTRAINT pk_player_statistics
      PRIMARY KEY ("playerStatisticsID");
    SQL

    execute <<-SQL
      ALTER TABLE player_statistics
      ADD CONSTRAINT fk_player_statistics_player
      FOREIGN KEY ("playerID") REFERENCES players ("playerID")
      ON DELETE SET NULL;
    SQL

    execute <<-SQL
      ALTER TABLE player_statistics
      ADD CONSTRAINT fk_player_statistics_match
      FOREIGN KEY ("matchID") REFERENCES matches ("matchID")
      ON DELETE CASCADE;
    SQL

    execute <<-SQL
      ALTER TABLE player_statistics
      ADD CONSTRAINT fk_player_statistics_scorecard
      FOREIGN KEY ("scoreID") REFERENCES scorecards("scoreID")
      ON DELETE CASCADE;
     SQL
  end
end
