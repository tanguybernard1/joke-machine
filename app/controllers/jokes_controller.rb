# frozen_string_literal: true

class JokesController < ApplicationController
  def index
    @joke = Joke.get_random_one
  end

  def refresh
    render json: Joke.get_random_one.slice(:body, :answer)
  end
end
