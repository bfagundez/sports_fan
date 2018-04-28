class Api::OrganizationsController < ApplicationController
  def index
    render json: Organization.all
  end

  def show
    render json: Organization.find(params[:id])
  end

  def teams
    render json: Organization.find(params[:id]).teams
  end
end
