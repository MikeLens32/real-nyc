class CommentsController < ApplicationController

  get "/comments" do
    Comment.all.to_json
  end

  post "/comments" do
    comment = Comment.create(text: params[:text], rating: params[:rating], review_id: params[:review_id], image: params[:image])
    # binding.pry
    if comment.id
      comment.to_json
    else
      comment.errors.full_messages.to_sentence
    end
  end

  get "/comments/:id" do
    find_comment
    if
      @comment.to_json
    else
      @comment.errors.full_messages.to_sentence
    end
  end

  patch "/comments/:id" do
    find_comment
    if @comment && @comment.update(params)
      @comment.to_json
    else !@comment
      comment.errors.full_messages.to_sentence
    end
  end

  delete "/comments/:id/delete" do
    find_comment
    if @comment&.destroy
      "Record was successfully destroyed"
    else
      {errors: "Record not found with id:#{params[:id]}"}.to_json
    end
  end

  private

  def find_comment
    @comment = Comment.find_by(id: params[:id])
  end
end