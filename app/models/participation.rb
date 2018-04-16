# Participation is the join table between players and sports
class Participation < ApplicationRecord
  belongs_to :player
  belongs_to :sport
end
