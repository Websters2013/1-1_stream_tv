class Video < ApplicationRecord

  has_and_belongs_to_many :actors
  has_and_belongs_to_many :hashtags
  has_and_belongs_to_many :users

  has_many :messages

  def self.serialize( video )
    {
      id: video.id,
      name: video.name,
      time_start: video.time_start.to_i,
      time_end: video.time_end.to_i,
      users: video.users,
      hashtags: Hashtag.serialize_all( video.hashtags ),
      actors: Actor.serialize_all( video.actors )
    }
  end

end
