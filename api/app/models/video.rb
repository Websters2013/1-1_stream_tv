class Video < ApplicationRecord

  has_and_belongs_to_many :actors
  has_and_belongs_to_many :hashtags
  has_and_belongs_to_many :users

end
