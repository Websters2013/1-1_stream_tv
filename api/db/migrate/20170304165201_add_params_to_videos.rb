class AddParamsToVideos < ActiveRecord::Migration[5.0]
  def change

    add_column :videos, :name, :string
    add_column :videos, :length, :timestamp
    add_column :videos, :time_start, :datetime

  end
end
