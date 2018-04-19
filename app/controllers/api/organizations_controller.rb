class Api::OrganizationsController < ApplicationController
  def index 
    render json: Organization.all
  end
end
