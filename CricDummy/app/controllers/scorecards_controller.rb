# app/controllers/scorecards_controller.rb

class ScorecardsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  before_action :set_scorecard, only: [:show, :update, :destroy]

  def index
    @scorecards = Scorecard.all
    render json: @scorecards
  end

  def show
    render json: @scorecard
  end

  def create
    @scorecard = Scorecard.new(scorecard_params)

    if @scorecard.save
      render json: @scorecard, status: :created
    else
      render json: @scorecard.errors, status: :unprocessable_entity
    end
  end

  def update
    if @scorecard.update(scorecard_params)
      render json: @scorecard
    else
      render json: @scorecard.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @scorecard.destroy
  end

  private

  def set_scorecard
    @scorecard = Scorecard.find(params[:id])
  end

  def scorecard_params
    params.require(:scorecard).permit(:matchID, :playerOfMatch, :total_overs_team1, :total_runs_team1, :total_wickets_team1, :total_overs_team2, :total_runs_team2, :total_wickets_team2, :match_summary)
  end
end
