class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :price
      t.string :description
      t.string :image
      t.string :category

      t.timestamps
    end
  end
end
