class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def create
    login = Login.authenticate(params[:loginID], params[:password])

    if login
      session[:login_id] = login.loginID
      render json: { message: 'Logged in', login: login }
    else
      render json: { message: 'Invalid loginID or password' }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:login_id] = nil
    render json: { message: 'Logged out' }
  end
end
