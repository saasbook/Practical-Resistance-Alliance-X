class CategoryController < ApplicationController
  before_action :set_user, only: [:new]
  def index
    query = Toolkit.select(:category).map(&:category).uniq
    @categories = []
    query.each do |q|
        @categories.push(q)
    end
    puts @categories
  end

  def show
    @kind = params[:kind]
    @toolkits = Toolkit.where(category: @kind)
  end

  def new
    query = Toolkit.select(:category).map(&:category).uniq
    @categories = []
    query.each do |q|
        @categories.push(q)
    end
    puts @categories
  end

  def display
      @id = params[:id]
      @kind = params[:kind]
      @toolkit = Toolkit.where(id: @id).first
      @steps = @toolkit.steps.order({:number => :asc})
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
end
