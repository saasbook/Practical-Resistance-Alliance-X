class Stoolkit < ApplicationRecord
    has_many :ssteps, :dependent => :destroy
end
