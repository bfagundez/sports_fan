require 'test_helper'

class OrganizationTest < ActiveSupport::TestCase
  def setup
    @organization = organizations(:one)
  end 

  test 'valid organization' do
    assert @organization.valid?
  end

  test 'invalid without a name' do
    organization = Organization.new
    refute organization.valid?, 'Organization is invalid without a name'  
    assert_not_nil organization.errors[:name], 'No validation error for name present' 
  end

  test '#teams' do
    assert_equal 2, @organization.teams.size
  end
end
