require 'rails_helper'

describe UsersController do
  describe ".create" do
    it "create a user" do
      user1 = {
        "user" => {
          :email => "user@example.com",
          :password => "123",
          :password_confirmation => "123",
          :firstName => "Oski",
          :lastName => "Bear"
        }
      }
      post :create, params: user1
      # expect(response).to render_template("users/show")
      expect(response).to redirect_to(user_url(assigns("user")))
    end
  end
end