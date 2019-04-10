class ToolkitController < ApplicationController
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
end
