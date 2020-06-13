class Book < ApplicationRecord
    has_many :reviews
    validates_presence_of :title, :price, :author, :description, :image, :category
end
