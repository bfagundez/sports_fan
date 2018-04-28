class RenameReferenceFieldsFromPlayerToUser < ActiveRecord::Migration[5.0]
  def self.up
    rename_column :participations, :player_id, :user_id
    rename_column :interests, :player_id, :user_id
    rename_column :teams_users, :player_id, :user_id
  end

  def self.down
    rename_column :participations, :user_id, :player_id
    rename_column :interests, :user_id, :player_id
    rename_column :teams_users, :user_id, :player_id
  end
 
end
