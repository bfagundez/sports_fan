# Join table to display in what sports a user is interested
class Interest < ApplicationRecord
  belongs_to :user
  belongs_to :sport
end
