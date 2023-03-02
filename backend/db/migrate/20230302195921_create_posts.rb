class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :image_src
      t.string :title
      t.string :description
      t.string :price

      t.timestamps
    end
  end
end
