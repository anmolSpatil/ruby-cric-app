class CreatePlayers < ActiveRecord::Migration[7.1]
  def change

    create_table :players, id:false do |t|
      t.bigserial :playerID, null: false
      t.string :playerName, collation: 'default'
      t.date :dateOfBirth
      t.string :country, collation: 'default'
      t.bigint :teamID
      t.string :jerseyNO, collation: 'default'
      t.bigint :runsScored
      t.bigint :wicketsTaken
      t.bigint :matchesPlayed

      t.timestamps

        t.foreign_key :teams, column: :teamID, on_delete: :nullify
    end

  end

  def down
    drop_table :players
  end
end
