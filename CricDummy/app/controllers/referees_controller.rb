

class RefereesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  before_action :set_referee, only: [:show, :update, :destroy]


  def index
    @referees = Referee.all
    render json: @referees
  end

  def show
    render json: @referee
  end

  def create
    @referee = Referee.new(referee_params)

    if @referee.save
      render json: @referee, status: :created
    else
      render json: @referee.errors, status: :unprocessable_entity
    end
  end

  def update
    if @referee.update(referee_params)
      render json: @referee
    else
      render json: @referee.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @referee.destroy
  end

  private

  def set_referee
    @referee = Referee.find(params[:id])
  end

  def referee_params
    params.require(:referee).permit(:refereeName, :dateOfBirth, :nationality, :matchesOfficiated)
  end
end
