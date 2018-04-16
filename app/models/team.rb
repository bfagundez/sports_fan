# Teams , belongs to an organization and can have many players
class Team < ApplicationRecord
  belongs_to :organization
  has_and_belongs_to_many :players
end
