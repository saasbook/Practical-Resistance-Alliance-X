Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  resources :sessions, only: [:new, :create, :destroy]
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  get 'category/index'
  get 'welcome/index'
  get 'category/:kind', to: 'category#show'
  get 'category/:kind/:id', to: 'category#display'
  get 'newtoolkit', to: 'toolkit#new'
  get 'newcategory', to: 'category#new'
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'

  # post requests
  post 'toolkit', to: 'toolkit#create'

  resources :toolkit do
    collection do
      post :search
    end
  end

end
