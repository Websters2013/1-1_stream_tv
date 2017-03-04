class Device < ApplicationRecord

  before_create :set_auth_token

  belongs_to :user

  private

  def set_auth_token
    self.auth_token = generate_auth_token
  end

  def generate_auth_token
    loop do
      token = SecureRandom.hex
      break token unless Device.exists?(auth_token: token)
    end
  end

end
