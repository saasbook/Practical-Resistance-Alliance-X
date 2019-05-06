class CreateSstep < ActiveRecord::Migration[5.2]
  def change
    create_table :ssteps do |t|
      t.string "content"
      t.integer "number"
      t.integer "stoolkit_id"
    end
  end
end
