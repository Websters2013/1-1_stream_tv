class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.serialize_all( items )

    rsult = []

    items.each do |item|
      rsult << self.serialize( item )
    end

    rsult

  end

end
