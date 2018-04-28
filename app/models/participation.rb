# Participation is the join table between users and sports
class Participation < ApplicationRecord
  belongs_to :user
  belongs_to :sport
end
