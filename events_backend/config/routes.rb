Rails.application.routes.draw do
  resources :user_events
  resources :users
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
