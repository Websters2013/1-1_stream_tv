class Actor < ApplicationRecord

  has_and_belongs_to_many :videos

  def self.serialize( actor )
    {
        id: actor.id,
        name: actor.name
    }
  end

end
