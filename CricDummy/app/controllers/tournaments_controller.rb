class TournamentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]

  before_action :set_tournament, only: [:show, :update, :destroy]

  def index
    @tournaments = Tournament.includes(:format).all
    render json: @tournaments, include: :format
  end

  def show
    render json: @tournament, include: :format
  end

  def create
    @tournament = Tournament.new(tournament_params)

    if @tournament.save
      render json: @tournament, status: :created
    else
      render json: @tournament.errors, status: :unprocessable_entity
    end
  end

  def update
    if @tournament.update(tournament_params)
      render json: @tournament
    else
      render json: @tournament.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @tournament.destroy
  end

  private

  def set_tournament
    @tournament = Tournament.includes(:format).find(params[:id])
  end

  def tournament_params
    params.require(:tournament).permit(:tourName, :start_date, :end_date, :location, :tour_type, :prize, :formatID)
  end
end
