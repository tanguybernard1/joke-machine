# frozen_string_literal: true

class Joke < ApplicationRecord
  def self.get_random_one
    self.order('RANDOM()').first
  end
end
