class RenamePlayersToUsers < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :players, :users
  end

  def self.down
    rename_table :users, :players
  end
end
