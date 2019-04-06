class AddToolkitReferenceToSteps < ActiveRecord::Migration[5.2]
  def change
    add_column  :steps, :toolkit_id, :integer
  end
end
