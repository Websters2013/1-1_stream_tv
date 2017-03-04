class User < ApplicationRecord

  has_many :devices

  before_save :check_password

  private

    def check_password

      self.password = gen_password unless self.password

    end

    def gen_password

      Passgen::generate

    end

    def send_to_me_channel

      ActionCable.server.broadcast "me_#{ self.id }", {
          message_type: 'info',
          response: User.serialize( self )
      }

    end

end
