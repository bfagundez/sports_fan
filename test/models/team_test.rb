require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  def setup
    @the_bulldogs = teams(:the_bulldogs)
    @the_rockets = teams(:the_rockets)
  end

  test '#organization' do
    assert_instance_of Organization, @the_bulldogs.organization
  end

  test '#users' do
    assert_equal 2, @the_rockets.users.size
    assert_equal 1, @the_bulldogs.users.size
  end
end
