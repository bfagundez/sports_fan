# Join table to display in what sports a player is interested
class Interest < ApplicationRecord
  belongs_to :player
  belongs_to :sport
end
