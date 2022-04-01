puts "Deleting review/comment data..."
Review.destroy_all
Comment.destroy_all

puts "Creating Review data..."
double_zero = Review.create(title: "Double Zero", location: "Lower Manhattan", description: "For all my fellow vegans this place is a great Italian resturant to visit in Lower Manhattan!", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ii9bfPLzWS-C-bO_Ti2p9gHaEK%26pid%3DApi&f=1", price: 24.85, tags:"Resturant")
stoned = Review.create(title: "Stoned", location: "Mid Manhattan", description: "For all my fellow stoners this place is a great Italian resturant to visit in Midtown Manhattan!", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ShSpS6RNNK_MevFT0l11zwHaEr%26pid%3DApi&f=1", price: 20.00, tags:"Resturant")

puts "Creating Comment data..."
DB_Comment_1 = Comment.create(text: "The food was amazing and theres a vegan hispanic inspired resturant in next door with the same ownership!", rating: 5, review: double_zero, image:"https://images.otstatic.com/prod1/42086619/1/large.jpg")
S_Comment_1 = Comment.create(text: "The food was amazing and had me relaxed for the rest of my day!", rating: 5, review: stoned, image:"https://s3-media0.fl.yelpcdn.com/bphoto/JKTy0dXwXOns0O2Zn8WoUQ/348s.jpg")

puts "✅ Done seeding!"
