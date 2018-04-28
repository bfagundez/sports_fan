# Main list of sports
class Sport < ApplicationRecord
  has_many :interests
  has_many :participations
  has_many :users, through: :participations, source: :user
  has_many :users, through: :interests, source: :user
end
