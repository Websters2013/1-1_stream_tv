class CreateDevices < ActiveRecord::Migration[5.0]
  def change
    create_table :devices do |t|
      t.integer :user_id
      t.string :auth_token
      t.string :provider
      t.string :token
      t.string :refresh_token
      t.string :uid
      t.datetime :last_login

      t.timestamps
    end
  end
end
