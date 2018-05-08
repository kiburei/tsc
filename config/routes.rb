Rails.application.routes.draw do
  get 'categories/show'

  root 'pages#welcome'
  resources :products
  resources :stores
  resources :categories
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
