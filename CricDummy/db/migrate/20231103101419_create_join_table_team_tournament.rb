class CreateJoinTableTeamTournament < ActiveRecord::Migration[7.1]
  def change
    create_join_table :teams, :tournaments do |t|
      # t.index [:team_id, :tournament_id]
      # t.index [:tournament_id, :team_id]


    end
      add_column :teams_tournaments, :team_tournament_id, :primary_key, default: -> { 'gen_random_uuid()' }
  end


  def down
    drop_table :teams_tournaments
  end
end
