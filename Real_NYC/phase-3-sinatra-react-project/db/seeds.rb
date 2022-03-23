puts "Deleting review/comment data..."
Review.destroy_all
Comment.destroy_all

puts "Creating Review data..."
double_zero = Review.create(title: "Double Zero", location: "Lower Manhattan", description: "For all my fellow vegans this place is a great Italian resturant to visit in Lower Manhattan!", image: "", price: 24.85, tags:"Resturant")
stoned = Review.create(title: "Stoned", location: "Mid Manhattan", description: "For all my fellow stoners this place is a great Italian resturant to visit in Midtown Manhattan!", image: "", price: 20.00, tags:"Resturant")

puts "Creating Comment data..."
DB_Comment_1 = Comment.create(text: "The food was amazing and theres a vegan hispanic inspired resturant in next door with the same ownership!", rating: 5, review: double_zero, image:"")
S_Comment_1 = Comment.create(text: "The food was amazing and had me relaxed for the rest of my day!", rating: 5, review: stoned, image:"")

puts "✅ Done seeding!"
