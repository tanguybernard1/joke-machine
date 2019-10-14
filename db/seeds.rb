# frozen_string_literal: true

if Rails.env.development?
  AdminUser.create!(email: 'admin@email.com', password: 'password', password_confirmation: 'password')
end
