require 'rails_helper'

describe UsersController do
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

  describe ".destroy" do
    it "destroy a user" do
      user1 = {
        "user" => {
          :email => "user@example.com",
          :password => "123",
          :password_confirmation => "123",
          :firstName => "Golden",
          :lastName => "Bear"
        }
      }
      admin = {
        "user" => {
          :email => "admin@example.com",
          :password => "123",
          :password_confirmation => "123",
          :firstName => "Oski",
          :lastName => "Bear",
          :admin => true
        }
      }
      post :create, params: user1
      post :create, params: admin

      @ad = User.where(:email => "admin@example.com")
      @ad.update_all({:admin => true})
      delete :destroy, params: {:id=>1}
      expect(flash[:notice]).to include("User was successfully destroyed.")
      expect(response).to redirect_to(users_url)
    end
  end

  describe "set_user" do
    it "redirect to login" do
      get :index
      expect(response).to redirect_to("/login")
    end
  end
end