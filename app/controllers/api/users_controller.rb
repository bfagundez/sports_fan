class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
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
end
