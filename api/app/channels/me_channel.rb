class MeChannel < ApplicationCable::Channel
  before_subscribe :authenticate

  def subscribed

    if current_user

      stream_from "me_#{ current_user.id }"

    end

  end

  def logout

    current_device.destroy
    ActionCable.server.broadcast "me_#{ current_user.id }", {
        message_type: 'logout',
        response: 'ok'
    }
    unsubscribed

  end


  def start_data
    # ActionCable.server.broadcast "me_#{ current_user.id }", {
    #     message_type: 'start_data',
    #     response: User.get_me( current_user )
    # }

  end

  def set_view( data )

    # current_user.setting.update( view: data[ 'view' ] )

  end

  def unsubscribed
  end
end