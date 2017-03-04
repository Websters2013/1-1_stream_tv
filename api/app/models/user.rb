class User < ApplicationRecord
  has_friendship

  has_many :devices

  private

    def send_to_me_channel

      ActionCable.server.broadcast "me_#{ self.id }", {
          message_type: 'info',
          response: User.serialize( self )
      }

    end

end
