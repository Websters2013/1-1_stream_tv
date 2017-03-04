class CreateUsersVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :users_videos, id: false do |t|

      t.integer :user_id
      t.integer :video_id

    end
  end
end
