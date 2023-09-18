class Api::V1::GreetingsController < ApplicationController
  def random_greeting
    random_message = Message.order('RANDOM()').first
    if random_message
      render json: { greeting: random_message.content }
    else
      render json: { error: 'No greetings found.' }, status: :not_found
    end
  end
end
