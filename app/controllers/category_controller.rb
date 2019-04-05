class CategoryController < ApplicationController
  def index
    query = Toolkit.select(:category)
    @categories = []
    query.each do |c|
        @categories.push(c.category)
    end
    puts @categories
  end

  def show
    @kind = params[:kind]
    @toolkits = Toolkit.where(category: @kind)
  end

  def toolkit
    @toolkits = Toolkit.last
    @kind = params[:kind]
  end

  def display
      @id = params[:id]
      @kind = params[:kind]
      @toolkit = Toolkit.where(id: @id).first
  end
end
