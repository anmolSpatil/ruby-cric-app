class MatchesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  before_action :set_match, only: [:show, :update, :destroy]

  def index
    @matches = Match.includes(:tournament, :team1, :team2, :winning_team, :referee, :venue, :pom_player).all
    render json: @matches, include: [:tournament, :team1, :team2, :winning_team, :referee, :venue, :pom_player]
  end


  def show
    render json: @match, include: [:tournament, :team1, :team2, :winning_team, :referee, :venue, :pom_player]
  end


  def create
    @match = Match.new(match_params)

    if @match.save
      render json: @match, status: :created
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end


  def update
    if @match.update(match_params)
      render json: @match
    else
      render json: @match.errors, status: :unprocessable_entity
    end
  end

  
  def destroy
    @match.destroy
  end

  private

  def set_match
    @match = Match.includes(:tournament, :team1, :team2, :winning_team, :referee, :venue, :pom_player).find(params[:id])
  end

  def match_params
    params.require(:match).permit(
      :tourID, :matchDateTime, :matchStatus, :result, :team1ID, :team2ID,
      :winningTeamID, :refereeID, :venueID, :pom_playerID
    )
  end
end
