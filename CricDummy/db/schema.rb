# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_11_03_101419) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "formats", primary_key: "formatID", force: :cascade do |t|
    t.string "formatName"
    t.integer "numberOfOvers", limit: 2
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logins", primary_key: "loginID", force: :cascade do |t|
    t.bigint "userID"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", primary_key: "matchID", force: :cascade do |t|
    t.bigint "tourID"
    t.string "matchStatus"
    t.datetime "matchDateTime", precision: nil, default: -> { "CURRENT_TIMESTAMP" }, null: false
    t.string "result"
    t.bigint "team1ID"
    t.bigint "team2ID"
    t.bigint "winningTeamID"
    t.bigint "refereeID"
    t.bigint "venueID"
    t.bigint "pom_playerID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "player_statistics", primary_key: "playerStatisticsID", force: :cascade do |t|
    t.bigint "playerID"
    t.bigint "matchID"
    t.bigint "runsScored"
    t.bigint "wicketsTaken"
    t.bigint "ballsFaced"
    t.float "oversBowled"
    t.bigint "runsConceded"
    t.integer "catchesTaken", limit: 2
    t.integer "stumpingsMade", limit: 2
    t.bigint "scoreID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", primary_key: "playerID", force: :cascade do |t|
    t.string "playerName"
    t.date "dateOfBirth"
    t.string "country"
    t.bigint "teamID"
    t.string "jerseyNO"
    t.bigint "runsScored"
    t.bigint "wicketsTaken"
    t.bigint "matchesPlayed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "referees", primary_key: "refereeID", force: :cascade do |t|
    t.string "refereeName"
    t.date "dateOfBirth"
    t.string "nationality"
    t.bigint "matchesOfficiated"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scorecards", primary_key: "scoreID", force: :cascade do |t|
    t.bigint "matchID"
    t.bigint "playerOfMatch"
    t.float "total_overs_team1"
    t.bigint "total_runs_team1"
    t.integer "total_wickets_team1", limit: 2
    t.float "total_overs_team2"
    t.bigint "total_runs_team2"
    t.integer "total_wickets_team2", limit: 2
    t.text "match_summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", primary_key: "teamID", force: :cascade do |t|
    t.integer "players", null: false
    t.string "teamName"
    t.string "captain"
    t.string "coach"
    t.string "city"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams_tournaments", primary_key: "team_tournament_id", force: :cascade do |t|
    t.bigint "team_id", null: false
    t.bigint "tournament_id", null: false
  end

  create_table "tournaments", primary_key: "tourID", force: :cascade do |t|
    t.string "tourName"
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.string "location"
    t.string "tour_type"
    t.string "prize", null: false
    t.bigint "formatID"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", primary_key: "userID", force: :cascade do |t|
    t.string "email"
    t.string "firstName"
    t.string "lastName"
    t.date "dateOfBirth"
    t.string "gender"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "venues", primary_key: "venueID", force: :cascade do |t|
    t.string "venueName"
    t.string "venueCity"
    t.string "venueCountry"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "logins", "users", column: "userID", primary_key: "userID", name: "fk_logins_user", on_delete: :nullify
  add_foreign_key "matches", "referees", column: "refereeID", primary_key: "refereeID", name: "fk_matches_referee", on_delete: :nullify
  add_foreign_key "matches", "teams", column: "pom_playerID", primary_key: "teamID", name: "fk_matches_teamp", on_delete: :nullify
  add_foreign_key "matches", "teams", column: "team1ID", primary_key: "teamID", name: "fk_matches_team1", on_delete: :nullify
  add_foreign_key "matches", "teams", column: "team2ID", primary_key: "teamID", name: "fk_matches_team2", on_delete: :nullify
  add_foreign_key "matches", "teams", column: "winningTeamID", primary_key: "teamID", name: "fk_matches_teamw", on_delete: :nullify
  add_foreign_key "matches", "tournaments", column: "tourID", primary_key: "tourID", name: "fk_matches_tournament", on_delete: :cascade
  add_foreign_key "matches", "venues", column: "venueID", primary_key: "venueID", name: "fk_matches_venue", on_delete: :nullify
  add_foreign_key "player_statistics", "players", column: "playerID", primary_key: "playerID", name: "fk_player_statistics_player", on_delete: :nullify
  add_foreign_key "player_statistics", "scorecards", column: "scoreID", primary_key: "scoreID", name: "fk_player_statistics_scorecard", on_delete: :cascade
  add_foreign_key "scorecards", "players", column: "playerOfMatch", primary_key: "playerID", name: "fk_scorecards_playerofmatch", on_delete: :nullify
  add_foreign_key "tournaments", "formats", column: "formatID", primary_key: "formatID", name: "fk_tournaments_format", on_delete: :nullify
end
