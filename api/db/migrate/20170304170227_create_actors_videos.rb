class CreateActorsVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :actors_videos, id: false do |t|
      t.integer :actor_id
      t.integer :video_id

    end
  end
end
