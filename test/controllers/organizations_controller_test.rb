require 'test_helper'

class OrganizationsControllerTest < ActionDispatch::IntegrationTest
  test 'get the list of organizations' do
    get api_organizations_url
    assert_response :success
    assert_equal Organization.all.to_json, @response.body
  end

  test 'show the list of teams of a given organization' do
    get teams_api_organization_url(id: Organization.first.id)
    assert_response :success
    json_response = Organization.first.teams.to_json
    assert_equal json_response, @response.body
  end
end
