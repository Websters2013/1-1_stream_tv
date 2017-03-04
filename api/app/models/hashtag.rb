class Hashtag < ApplicationRecord

  has_and_belongs_to_many :videos

  def self.serialize( hashtag )
    {
        id: hashtag.id,
        name: hashtag.name
    }
  end

end
