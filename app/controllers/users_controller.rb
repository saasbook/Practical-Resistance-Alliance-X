class UsersController < ApplicationController
  before_action :set_user, only: [:index, :show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    if @user.admin?
      @users = User.all
    else
      redirect_to @user
    end
  end

  # GET /users/1
  # GET /users/1.json
  def show
  end

  # GET /users/new
  def new
    @user = User.new
    @info = {:title => "New User", :button_name => "Sign Up"}
  end

  # GET /users/1/edit
  def edit
    @info = {:title => "Update Profile", :button_name => "Save"}
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        session[:user_id] = @user.id
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    if @user.admin?
      userToBeRemoved = User.find(params[:id])
      userToBeRemoved.destroy
      respond_to do |format|
        format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
        format.json { head :no_content }
      end
    else
      redirect_to @user
    end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = current_user
      unless @user
        flash[:danger] = "Please log in"
        redirect_to login_path
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :firstName, :lastName)
    end
end
