class CategoryController < ApplicationController
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

  end
  
  def toolkit
    @toolkits = Toolkit.last
    @kind = params[:kind]
  end

  def display
      @id = params[:id]
      @kind = params[:kind]
      @toolkit = Toolkit.where(id: @id).first
      @steps = @toolkit.steps.order({:number => :asc})
  end
end
