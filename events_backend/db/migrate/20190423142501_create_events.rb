class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :date
      t.string :image
      t.integer :user_id

      t.timestamps
    end
  end
end
