# An organization groups teams
class Organization < ApplicationRecord
  has_many :teams
  validates :name, presence: true
end
