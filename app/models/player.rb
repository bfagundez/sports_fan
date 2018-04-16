class Player < ApplicationRecord
  has_and_belongs_to_many :teams
  has_many :participations
  has_many :sports, through: :participations
end
