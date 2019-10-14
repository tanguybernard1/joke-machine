# frozen_string_literal: true

class JokesController < ApplicationController
  def index
    @joke = Joke.order('RANDOM()').first
  end
end
