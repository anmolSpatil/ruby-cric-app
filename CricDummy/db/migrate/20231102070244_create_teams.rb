class CreateTeams < ActiveRecord::Migration[7.1]
  def up

      create_table :teams, id: false do |t|
        t.bigserial :teamID, null: false, primary_key: true
        t.integer :players, null: false
        t.string :teamName, collation: 'default'
        t.string :captain, collation: 'default'
        t.string :coach, collation: 'default'
        t.string :city, collation: 'default'

        t.timestamps

      end

  end
  def down
    execute "DROP TABLE IF EXISTS teams CASCADE"
  end


end
