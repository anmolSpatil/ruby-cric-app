# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'  # Replace with the origin of your React app

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options]  # Allow the necessary HTTP methods
  end
end
