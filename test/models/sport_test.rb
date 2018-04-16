require 'test_helper'

class SportTest < ActiveSupport::TestCase
  def setup
    @swimming = sports(:swimming)
    @archery = sports(:archery)
  end

  test '#interests' do
    assert_equal 1, @archery.interests.size
  end
  
  test '#participations' do
    assert_equal 2, @swimming.interests.size
  end
end
