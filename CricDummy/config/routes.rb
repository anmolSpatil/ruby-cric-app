Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  resources :teams
  resources :tournaments
  resources :formats
  resources :players
  resources :referees
  resources :venues
  resources :matches
  resources :teams_tournaments
  resources :scorecards
  resources :player_statistics

  resources :users, only: [:create, :show, :update, :destroy, :index] do
    collection do
      get 'index'
    end
  end

  # Routes for login and logout
  resources :sessions, only: [:create, :destroy, :edit, :update]
end
