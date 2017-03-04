class CreateHashtagsVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :hashtags_videos, id: false do |t|
      t.integer :hashtag_id
      t.integer :video_id
    end
  end
end
