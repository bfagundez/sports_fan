require 'test_helper'

class SportTest < ActiveSupport::TestCase
  def setup
    @swimming = sports(:swimming)
    @archery = sports(:archery)
  end

  test '#players' do
    assert_equal 2, @swimming.players.size
    assert_equal 1, @archery.players.size
  end
end
