class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.integer :rating
      t.references :review
      t.string :image

      t.timestamps null: false
    end
  end
end
