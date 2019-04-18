class Toolkit < ApplicationRecord
    has_many :steps, :dependent => :destroy

    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks

    def self.search_published(query)
        self.search({
          query: {
            bool: {
              must: [
              {
                multi_match: {
                  query: query,
                  fields: [:title, :author, :category, :overview, :created_at, :updated_at]
                }
              },
              {
                match: {
                  published: true
                }
              }]
            }
          }
        })
      end
end
