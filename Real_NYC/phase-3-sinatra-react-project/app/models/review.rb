class Review < ActiveRecord::Base
    has_many :comments

    validates :title, presence: true, uniqueness: true
    validates :location, length: {minimum: 3}
    validates :description, presence: true, length: {maximum: 200}
    validates :price, numericality: true
end
