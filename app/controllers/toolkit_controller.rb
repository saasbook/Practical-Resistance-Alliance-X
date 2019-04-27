class ToolkitController < ApplicationController
  require 'set'

  def create
    @toolkit_data = JSON.parse(request.body.read)
    @toolkit = Toolkit.create!({
      :title => @toolkit_data["title"], 
      :author => "Unknown", 
      :category => @toolkit_data["category"],
      :overview => @toolkit_data["overview"]
    })
    @toolkit_data["steps"].each {|step, content|
      @toolkit.steps.create({:content => content, :number => step})
    }
    redirect_to "/category/"+@toolkit.category+"/"+@toolkit.id.to_s
  end

  def search
    query = params[:search].presence && params[:search][:query].presence
    puts "q", params
    if !query.nil?
      # search_queries = params[:search][:query].split(' ')
      search = params[:search][:query]
      puts search
      @search_results = Toolkit.where("lower(title) LIKE lower(?)", "%#{search}%")
      # @search_results = Toolkit.where("lower(title) IN (?)", "%#{search_queries}%")
      # ["startups.locations IN (?)", @sea_countries]
      # @search_results = Set[]
      # search_queries.each do |search|
      #   @search_results.add Toolkit.where("lower(title) LIKE lower(?)", "%#{search}%")
      # end
    else
      @search_results = []
    end
  end
end
