class Stoolkit < ApplicationRecord
    has_many :ssteps, :dependent => :destroy
    belongs_to :toolkit
end
