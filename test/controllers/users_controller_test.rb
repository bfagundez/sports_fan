require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test 'get the list of users' do
    get api_users_url
    assert_response :success
    assert_equal User.all.to_json, @response.body
  end

  test 'get a list of participations filter by date' do
    start_date = Time.now.prev_week
    end_date = Time.now
    get participations_api_user_url(id: User.first.id,
                                    start_date: start_date,
                                    end_date: end_date)
    assert_response :success
    user_json_response = Participation.where(user: User.first)
                                      .where(date: (start_date..end_date))
                                      .as_json(include: :sport)
    assert_equal user_json_response.to_json, @response.body
  end

  test 'get a list of participations from a user aggregated by sport' do
    get participations_api_user_url(id: User.first.id, aggregate: 'sports')
    assert_response :success
    user_json_response = Participation.where(user: User.first)
                                      .select('sport_id, sum(duration) as total_duration')
                                      .group(:sport_id)
                                      .as_json(include: :sport)
    assert_equal user_json_response.to_json, @response.body
  end

  test 'filter participations by sport' do
    sport = Sport.where(name: 'Archery').first
    get participations_api_user_url(id: User.second.id, filter_by: sport.id)
    assert_response :success
    json_response = Participation.where(user: User.second)
                                 .where(sport: sport)
                                 .as_json(include: :sport)
    assert_equal json_response.to_json, @response.body
  end

  test 'get a list of participations from a user' do
    get participations_api_user_url(id: User.first.id)
    assert_response :success
    json_response = User.first.participations.as_json(include: :sport)
    assert_equal json_response.to_json, @response.body
  end
end
