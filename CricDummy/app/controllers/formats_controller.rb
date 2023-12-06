class FormatsController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
  before_action :set_format, only: [:show, :update, :destroy]

def index
  @players=Format.all
  render json: @players
end

def create
  @format = Format.new(format_params)
  if @format.save
    render json: @format, status: :created
  else
    render jspn:@format.errors, status: :unprocessable_entity
  end

end

def update
  if @format.update(format_params)
    render json: @format
  else
      render json: @format.errors, status: :unprocessable_entity
  end
end

def destroy
  @format.destroy
end

def show
  render json: @format
end

private
def set_format
  @format = Format.find(params[:id])
end


def format_params
  params.permit(:formatName, :numberOfOvers, :description)
end
end
