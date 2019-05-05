require 'rails_helper'

describe CategoryController do
    describe ".index" do
        it "shows all categories" do
            Category.create!({
                :name => "Law"
            })
            get :index
            expect(response).to render_template(:index)
        end
    end
    describe ".create" do
        it "creates a category" do
            category1 = Hash.new
            category1["name"] = "Education"
            post :create, params: category1, as: :json
            expect(response).to redirect_to("/category/index")            
        end
    end
    describe ".show" do
        it "shows toolkits with the specified category" do
            Category.create!({
                :name => "Law"
            })
            get :show, :params => {"Law"}
            expect(response).to redirect_to("category/Law")
        end
    end
    describe ".display" do
        it "finds a searched toolkit by category" do
            Toolkit.create!({
                :title => "test title", 
                :author => "Unknown", 
                :category => "Law",
                :overview => "lacdjnasuil"
            })
            post :search, :params => {:search => {"query"=>"Law"}}
            expect(response).to render_template(:search)
        end
    end
    
end