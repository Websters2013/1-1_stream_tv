class Message < ApplicationRecord
  belongs_to :video
  belongs_to :user


  def self.serialize( message )
    {
        id: message.id,
        text: message.text,
        created_at: message.created_at.to_i,
        user: User.serialize( User.find_by( message.user_id ) )
    }
  end
end
