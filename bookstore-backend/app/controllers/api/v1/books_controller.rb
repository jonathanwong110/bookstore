class Api::V1::BooksController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    @books = Book.all
    render json: @books, status: 200
  end

  def show
    render json: @book, status: 200
  end

  private
    def set_product
      @book = Book.find(params[:id])
    end

    def product_params
      params.require(:book).permit(:title, :author, :price, :description, :image, :category)
    end

end
