class Toolkit < ApplicationRecord
    has_many :steps, :dependent => :destroy
end
