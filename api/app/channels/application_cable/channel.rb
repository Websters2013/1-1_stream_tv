module ApplicationCable
  class Channel < ActionCable::Channel::Base

    def authenticate
      authenticate_token || reject
    end

    def current_device
      @current_device
    end

    def current_user
      @current_user
    end

    private

    def authenticate_token
      @current_device = Device.find_by( auth_token: params[ :token ] )

      if @current_device
        @current_user = @current_device.user
      end

      @current_device

    end

  end
end
