class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.decimal :height
      t.decimal :weight
      t.boolean :is_public
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
