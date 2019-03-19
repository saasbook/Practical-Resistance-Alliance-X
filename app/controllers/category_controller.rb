class CategoryController < ApplicationController
  def index
  end

  def show
    @kind = params[:kind]
  end

end
