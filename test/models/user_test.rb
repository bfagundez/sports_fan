require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @viktor = users(:viktor)
    @alastor = users(:alastor)
  end

  test '#teams' do
    assert_equal 1, @alastor.teams.size
    assert_equal 2, @viktor.teams.size
  end

  test '#participations' do
    assert_equal 1, @viktor.participations.size
    assert_equal 2, @alastor.participations.size
  end

  test '#interests' do
    assert_equal 2, @viktor.interests.size
  end
end
