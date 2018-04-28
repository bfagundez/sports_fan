class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def participations
    render json: User.find(params[:id]).participations
  end
end
