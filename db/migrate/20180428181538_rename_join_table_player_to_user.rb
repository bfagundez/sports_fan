class RenameJoinTablePlayerToUser < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :players_teams, :teams_users
  end

  def self.down
    rename_table :teams_users, :players_teams
  end
end
