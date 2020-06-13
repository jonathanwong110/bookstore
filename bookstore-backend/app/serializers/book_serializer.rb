class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :price, :description, :image, :category
  has_many :reviews
end
