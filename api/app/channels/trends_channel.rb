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

    video_ids = []

    friends = current_user.friends

    friends.each do |friend|
      video_ids += friend.videos.pluck( :id )
    end

    videos = Video.where( id: video_ids ).order( time_end: :desc )

    ActionCable.server.broadcast "trends_#{ current_user.id }", {
        message_type: 'friends',
        response: Video.serialize_all( videos )
    }

  end

  def popular

    videos = Video.all.order( time_end: :desc )

    videos.sort { |a,b| a.users.length <=> b.users.length }

    ActionCable.server.broadcast "trends_#{ current_user.id }", {
        message_type: 'popular',
        response: Video.serialize_all( videos )
    }

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
