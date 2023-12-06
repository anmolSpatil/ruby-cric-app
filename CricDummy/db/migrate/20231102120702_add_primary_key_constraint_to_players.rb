class AddPrimaryKeyConstraintToPlayers < ActiveRecord::Migration[7.1]
  def up
    execute 'ALTER TABLE "players" ADD PRIMARY KEY ("playerID");'


  end
  def down

  end
end
