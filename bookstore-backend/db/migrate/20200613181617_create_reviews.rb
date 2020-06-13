class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :content
      t.string :book_id
      t.string :integer

      t.timestamps
    end
  end
end
