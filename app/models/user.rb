# User model, has many teams, interests and participations
class User < ApplicationRecord
  has_and_belongs_to_many :teams
  has_many :interests
  has_many :participations
  has_many :sports, through: :participations, source: :sport
  has_many :sports, through: :interests, source: :sport
end
