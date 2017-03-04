class ChangeVideos < ActiveRecord::Migration[5.0]
  def change
    remove_column :videos, :length
    add_column :videos, :time_end, :datetime
  end
end
