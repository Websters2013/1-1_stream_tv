class AddUrlToVideos < ActiveRecord::Migration[5.0]
  def change
    add_column :videos, :url, :string
    add_column :videos, :thumbnail, :string
  end
end
