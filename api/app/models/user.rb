class User < ApplicationRecord
  has_friendship

  has_many :devices
  has_and_belongs_to_many :videos

  def self.serialize( user )

    {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        image: user.image,
        facebook_id: user.facebook_id
    }

  end

  private

    def send_to_me_channel

      ActionCable.server.broadcast "me_#{ self.id }", {
          message_type: 'info',
          response: User.serialize( self )
      }

    end

end
