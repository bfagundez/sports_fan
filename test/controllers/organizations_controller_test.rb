require 'test_helper'

class OrganizationsControllerTest < ActionDispatch::IntegrationTest
  test 'get the index' do
    get api_organizations_url
    assert_response :success
  end
end
