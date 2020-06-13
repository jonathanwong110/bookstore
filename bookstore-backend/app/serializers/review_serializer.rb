class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :book_id
  belongs_to :book
end
