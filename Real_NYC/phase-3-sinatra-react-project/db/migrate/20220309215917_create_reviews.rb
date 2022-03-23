class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :location
      t.string :description
      t.string :image
      t.float :price
      t.string :tags

      t.timestamps null: false
    end
    
  end
end
