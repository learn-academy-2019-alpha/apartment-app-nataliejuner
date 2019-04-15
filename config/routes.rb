Rails.application.routes.draw do
  get 'protected', to: 'pages#protected'
  get 'unprotected', to: 'pages#unprotected'
end
