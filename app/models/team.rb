# Teams , belongs to an organization and can have many users
class Team < ApplicationRecord
  belongs_to :organization
  has_and_belongs_to_many :users
end
