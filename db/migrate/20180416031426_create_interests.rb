class CreateInterests < ActiveRecord::Migration[5.0]
  def change
    create_table :interests do |t|
      t.references :player, foreign_key: true
      t.references :sport, foreign_key: true

      t.timestamps
    end
  end
end
