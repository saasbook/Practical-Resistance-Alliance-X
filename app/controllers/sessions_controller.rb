class SessionsController < ApplicationController
  def new
  end
  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/category/index', notice: ""
    else
      flash[:alert] = "Email or password is invalid"
      redirect_to login_path
    end
  end
  def destroy
    session[:user_id] = nil
    redirect_to '/category/index', notice: "Logged out!"
  end
end
