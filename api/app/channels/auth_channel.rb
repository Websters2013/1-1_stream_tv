class AuthChannel < ApplicationCable::Channel

  require 'koala'
  require 'google/apis/drive_v2'
  require 'google/api_client/client_secrets'

  private

  def add_friends( friends, user )

    friends.each do | friend |

      person = User.find_by( facebook_id: friend[ 'id' ] )

      if person

        user.friend_request( person )

        person.accept_request( user )

      end

    end

  end

  def get_facebook_access_token( code )

    access_token = ''

    response =  HTTP.get("https://graph.facebook.com/v2.8/oauth/access_token?client_id=1761579497412011&redirect_uri=http://localhost:3010/auth?type=facebook&client_secret=efb7ab2bb8d1fd4e0781a0e9b2506f3e&code=#{code}")

    if response.code == 200

      body = JSON.parse(response.body).symbolize_keys

      access_token = body[ :access_token ]

    end

    access_token

  end

  def get_google_data( code )

    result = {}

    client_secrets = Google::APIClient::ClientSecrets.load('./google/client_secret.json')

    auth_client = client_secrets.to_authorization

    auth_client.update!(
        scope: 'https://www.googleapis.com/auth/userinfo.email',
        redirect_uri: 'http://localhost:3010/auth' )

    auth_client.code = code

    auth_client.fetch_access_token!

    result[ 'access_token' ] = auth_client.access_token
    result[ 'refresh_token' ] = auth_client.refresh_token

    response =  HTTP.get( "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=#{ result[ 'access_token' ] }" )

    if response.code == 200

      body = JSON.parse(response.body ).symbolize_keys

      result[ 'email' ] = body[ :email ]
      result[ 'uid' ] = body[ :id ]

    end

    result

  end

  public

  def subscribed
    stream_from "auth_#{ uuid }"
  end

  def google( data )

    google_data = get_google_data( data[ 'code' ] )

    user = User.find_by( email: google_data[ 'email' ] )

    user = User.create( email: google_data[ 'email' ] ) unless user

    device = Device.create( user_id: user.id, provider: 'google', uid: google_data[ 'uid' ], refresh_token: google_data[ 'refresh_token' ], token: google_data[ 'access_token' ], last_login: DateTime.now.utc )

    ActionCable.server.broadcast "auth_#{ uuid }", {
        token: device.auth_token
    }

  end

  def facebook( data )

    token = get_facebook_access_token( data[ 'code' ] )

    graph = Koala::Facebook::API.new( token )

    user_data = graph.get_object( :me, { fields: [ :email ] } )

    friends = graph.get_connections('me', 'friends')

    user = User.find_by( email: user_data[ 'email' ] )

    user = User.create( email: user_data[ 'email' ] ) unless user

    user.update( facebook_id: user_data[ 'id' ].to_i )

    device = Device.create( user_id: user.id, provider: 'facebook', uid: user_data[ 'id' ], token: token, last_login: DateTime.now.utc )

    add_friends( friends, user )

    ActionCable.server.broadcast "auth_#{ uuid }", {
        token: device.auth_token
    }

  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
