require "pry"

class ReviewsController < ApplicationController

  get "/reviews" do
    reviews = Review.all.to_json(include: :comments)
  end

  post "/reviews" do
    review = Review.create(title: params[:title], location: params[:location], description: params[:description], image: params[:image], price: params[:price], tags: params[:tags])
    if 
      review.to_json(include: :comments)
    else
      review.errors.full_messages.to_sentence
    end
  end
  
  get "/reviews/:id" do
    find_review
    if @review
      @review.to_json(include: :comments)
    else
      {errors: "Record not found with id:#{params[:id]}"}.to_json
    end
  end

  patch "/reviews/:id" do
    find_review
    if @review && @review.update(params)
      @review.to_json(include: :comments)
    elsif !review
      {errors: "Record not found with id:#{params[:id]}"}.to_json
    else
      @review.errors.full_messages.to_sentence
    end
  end

  delete "/reviews/:id/delete" do
    find_review
    if @review&.destroy
      "Record was successfully destroyed"
    else
      {errors: "Record not found with id:#{params[:id]}"}.to_json
    end
  end

  private

  def find_review
    @review = Review.find_by(id: params[:id])
  end

end
