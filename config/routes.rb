Rails.application.routes.draw do
  get 'category/index'
  get 'welcome/index'
  get 'category/:kind', to: 'category#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
