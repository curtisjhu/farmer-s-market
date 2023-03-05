Rails.application.routes.draw do
  root "home#index"
  get "/", to: "home#index"
  resources :posts, only: [:index, :show, :create, :destroy]
end
