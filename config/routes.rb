# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)

  resources :jokes, only: :index
  get '/refresh', to: 'jokes#refresh'

  root to: 'jokes#index'
end
