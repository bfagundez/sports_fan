class CreateParticipationTable < ActiveRecord::Migration[5.0]
  def change
    create_table :participations do |t|
      t.belongs_to :sport, index: true
      t.belongs_to :player, index: true
      t.datetime :date
      t.integer :duration
      t.timestamps
    end
  end
end
