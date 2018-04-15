require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  def setup
    @team = teams(:one)
  end 

  test 'valid team' do
    assert @team.valid?
  end

  test '#organization' do
    assert_instance_of Organization, @team.organization
  end
end
