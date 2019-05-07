class Toolkit < ApplicationRecord
    has_many :steps, :dependent => :destroy
<<<<<<< HEAD
    has_many :categories
=======
    has_many :stoolkits, :dependent => :destroy
>>>>>>> 743e9b4b24c27b7ed5e7e95008bbec0745f7bc32
end
