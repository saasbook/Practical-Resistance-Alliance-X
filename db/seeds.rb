# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# toolkits = [{:title => "Spanish Workshop", :author => 'Me', :category => 'Law', :steps => '1234', :overview => 'Lorem Ipsum'},
#             {:title => "Demonstration", :author => 'You', :category => 'Social', :steps => '1234', :overview => 'Lorem Ipsum'},
#         ]


# toolkits.each do |toolkit|
#     Toolkit.create!(toolkit)
# end

@toolkit1 = Toolkit.create({:title => "Spanish Workshop", :author => 'Me', :category => 'Law', :overview => 'Lorem Ipsum'})
@toolkit2 = Toolkit.create({:title => "Demonstration", :author => 'You', :category => 'Social', :overview => 'Lorem Ipsum'})
@toolkit3 = Toolkit.create({:title => "Chinese Workshop", :author => 'He', :category => 'Law', :overview => 'Lorem Ipsum'})

@step1 = Step.create({:content => "Consider your topic. The first element of planning a workshop is to know what you're talking about.", :number => 1})
@step2 = Step.create({:content => "Consider your audience.", :number => 2})
@step3 = Step.create({:content => "Consider the time available.", :number => 3})
@step4 = Step.create({:content => "Participants need time to talk and connect with one another.", :number => 4})



@toolkit1.steps << @step2

@toolkit1.steps << @step1
@toolkit1.steps << @step3
@toolkit1.steps << @step4