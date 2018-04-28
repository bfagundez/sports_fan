require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test 'get the list of users' do
    get api_users_url
    assert_response :success
    assert_equal Player.all.to_json, @response.body 
  end
end
