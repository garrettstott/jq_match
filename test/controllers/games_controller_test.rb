require 'test_helper'

class GamesControllerTest < ActionController::TestCase
  test "should get match" do
    get :match
    assert_response :success
  end

end
