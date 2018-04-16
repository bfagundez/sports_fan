require 'test_helper'

class ParticipationTest < ActiveSupport::TestCase
  def setup
    @viktor = players(:viktor)
    @alastor = players(:alastor)
  end

  test '#teams' do
    assert_equal 1, @alastor.teams.size
    assert_equal 2, @viktor.teams.size
  end

  test '#participations' do
    assert_equal 1, @viktor.participations.size
    assert_equal 2, @alastor.participations.size
  end
end
