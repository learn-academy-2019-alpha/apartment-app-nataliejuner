class ApartmentsController < ApplicationController
  def index
    if current_user

    end
  else
    apartments = Apartment.all
    render json: apartments
  end
end
