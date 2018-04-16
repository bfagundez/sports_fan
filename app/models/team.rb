class Team < ApplicationRecord
  belongs_to :organization
  has_and_belongs_to_many :players
end
