class Message < ApplicationRecord
  belongs_to :video
  belongs_to :user

  after_create :broadcast

  def self.serialize( message )
    {
        id: message.id,
        text: message.text,
        created_at: message.created_at.to_i,
        user: User.serialize( User.find_by( id: message.user_id ) )
    }
  end

  def broadcast
    ActionCable.server.broadcast "chat_#{ self.video_id }", {
        message_type: 'new',
        response: Message.serialize( self )
    }
  end
end
