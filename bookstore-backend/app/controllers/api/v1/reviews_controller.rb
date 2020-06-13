class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show]

  def show
    render json: @book, status: 200
  end

  private
    def set_review
      @book = Book.find(params[:id])
    end

    def review_params
      params.require(:review).permit(:content, :book_id)
    end
    
end
