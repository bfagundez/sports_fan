# Participation is the join table between users and sports
class Participation < ApplicationRecord
  belongs_to :user
  belongs_to :sport

  scope :between, ->(start_date, end_date) { where(date: (start_date..end_date)) }
  scope :by_sport, lambda {
                     select('sport_id, sum(duration) as total_duration')
                       .group(:sport_id)
                   }
  scope :filter, ->(sport) { where(sport: sport) }
end
