Rails.application.routes.draw do
  namespace :api do
    resources :organizations do
      get :teams, on: :member
    end
  end 
end
