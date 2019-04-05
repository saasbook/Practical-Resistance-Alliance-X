# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
toolkits = [{:title => "Spanish Workshop", :author => 'Me', :category => 'Law', :steps => '1234', :overview => 'Lorem Ipsum'},
            {:title => "Demonstration", :author => 'You', :category => 'Social', :steps => '1234', :overview => 'Lorem Ipsum'},
        ]


toolkits.each do |toolkit|
    Toolkit.create!(toolkit)
end
