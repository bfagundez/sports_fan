Rails.application.routes.draw do
  namespace :api do
    resources :organizations do
      get :teams, on: :member
    end
    resources :users do
      get :participations, on: :member
    end
  end 
end
