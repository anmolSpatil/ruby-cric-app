class PlayersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  before_action :set_player, only: [:show, :update, :destroy]
  def index
    @players = Player.includes(:team).all
    render json: @players, include: :team
  end

  def show
    render json: @player, include: :team
  end

  def update
    if @player.update(player_params)
      render json: @player
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  def create
    @player = Player.new(player_params)

    if @player.save
      render json: @player, status: :created
    else
      render json: @player.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @player.destroy
  end

  private
  def set_player
    @player = Player.includes(:team).find(params[:id])
  end

  def player_params
    params.permit(:playerName, :dateOfBirth, :country, :teamID, :jerseyNO, :runsScored, :wicketsTaken, :matchesPlayed)
  end
end
