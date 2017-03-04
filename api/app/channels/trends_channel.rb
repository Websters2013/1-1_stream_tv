class TrendsChannel < ApplicationCable::Channel
  before_subscribe :authenticate

  require 'date'

  def subscribed

    stream_from "trends_#{ current_user.id }"

  end

  def new( data )

    videos = Video.where( "time_end < ?", DateTime.strptime("#{ data[ 'timestamp' ] }", '%s' ) ).order( time_end: :desc )

    ActionCable.server.broadcast "trends_#{ current_user.id }", {
        message_type: 'new',
        response: Video.serialize_all( videos )
    }

  end

  def friends



  end

  def popular

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
