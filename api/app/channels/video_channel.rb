class VideoChannel < ApplicationCable::Channel
  before_subscribe :authenticate

  def subscribed
    stream_from "video_#{ self.uuid }"
  end

  def online( data )

    date = DateTime.strptime("#{ data[ 'timestamp' ] }", '%s' )


    video = Video.where( channel: data[ 'name' ] ).where( "time_start <= ? AND time_end > ?", date,date )[ 0 ]

    if video
      ActionCable.server.broadcast "video_#{ current_user.id }", {
          message_type: 'online',
          response: Video.serialize( video )
      }
    end

    p 500
    unsubscribed

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
