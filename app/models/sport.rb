class Sport < ApplicationRecord
  has_many :interests
  has_many :participations
  has_many :players, through: :participations, source: :player
  has_many :players, through: :interests, source: :player
end
