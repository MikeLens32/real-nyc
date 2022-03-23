require "pry"

class ReviewsController < ApplicationController

  # GET: /reviews
  get "/reviews" do
    # erb :"/reviews/index.html"
    Review.all.to_json
  end

  # GET: /reviews/new
  # get "/reviews/new" do
  #   erb :"/reviews/new.html"
  # end

  # POST: /reviews
  post "/reviews" do
    review = Review.create(params)
    if review.id
      review.to_json(include: :comments)
    else
      review.errors.full_messages.to_sentence
    end
  end

  # GET: /reviews/5
  get "/reviews/:id" do
    # erb :"/reviews/show.html"
  end

  # GET: /reviews/5/edit
  # get "/reviews/:id/edit" do
  #   erb :"/reviews/edit.html"
  # end

  # PATCH: /reviews/5
  patch "/reviews/:id" do
    # redirect "/reviews/:id"
  end

  # DELETE: /reviews/5/delete
  delete "/reviews/:id/delete" do
    # redirect "/reviews"
  end
end
