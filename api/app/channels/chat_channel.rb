class ChatChannel < ApplicationCable::Channel
  before_subscribe :authenticate

  def subscribed

    @video_id = params[ 'id' ]

    stream_from "chat_#{ @video_id }"

    ActionCable.server.broadcast "chat_#{ @video_id }", {
        message_type: 'all',
        response: Message.serialize_all( Message.where( video_id:@video_id ) )
    }
  end

  def say( data )

    Message.create( text: data[ 'text' ], video_id: @video_id, user_id: current_user.id )

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
