require 'rails_helper'

describe UsersController do
  before(:each) do
    @user = create(:user)

  end

  describe ".create" do
    it "create a valide user" do
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
      expect(response).to redirect_to(user_url(assigns("user")))
    end

    it "create a invalid user" do
      user2 = {
        "user" => {
          :email => "user@example.com",
          :password => "122",
          :password_confirmation => "123",
          :firstName => "Oski",
          :lastName => "Bear"
        }
      }
      post :create, params: user2
      expect(response).to render_template("users/new")
    end
  end
end