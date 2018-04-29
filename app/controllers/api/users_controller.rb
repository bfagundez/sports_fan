class Api::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  def index
    render json: User.all
  end

  def show
    @user = User.where(id: params[:id])
                .includes(:teams)
                .first

    render json: @user.as_json(include: :teams)
  end

  def participations
    query = Participation.where(user: params[:id])
    if params[:start_date] && params[:end_date]
      query = query.between(params[:start_date], params[:end_date])
    end
    query = query.by_sport if params[:aggregate] == 'sports'
    query = query.filter(params[:filter_by]) if params[:filter_by]
    render json: query.includes(:sport).all.as_json(include: :sport)
  end

  def create
    @user = user.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :height, :weight, :is_public)
  end
end
