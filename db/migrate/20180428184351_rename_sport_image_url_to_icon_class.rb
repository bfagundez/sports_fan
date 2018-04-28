class RenameSportImageUrlToIconClass < ActiveRecord::Migration[5.0]
  def self.up
    rename_column :sports, :image_url, :icon_class
  end

  def self.down
    rename_column :sports, :icon_class, :image_url
  end
 end
