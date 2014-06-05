class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.integer :priority
      t.boolean :done
      t.datetime :done_at
      t.datetime :due_at

      t.timestamps
    end
  end
end
