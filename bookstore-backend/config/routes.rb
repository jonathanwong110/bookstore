Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :reviews
      resources :books
    end
  end
end
