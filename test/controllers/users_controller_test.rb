require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test 'get the list of users' do
    get api_users_url
    assert_response :success
    assert_equal User.all.to_json, @response.body
  end

  test 'get a list of participations from a user' do
    get participations_api_user_url(id: User.first.id)
    assert_response :success
    json_response = User.first.participations.to_json
    assert_equal json_response, @response.body
  end
end
