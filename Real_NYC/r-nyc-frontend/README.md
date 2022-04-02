# Phase 3 - NYC Frontend In React

This website will be focused on taking in the reviews of people around NYC.
This will be primarily good for torist that come to NY and have the generic experience of The Statue of Liberty or Time Square.
New York has so much more to offer and through the reviews and experiences of other people expand your curiousity of what things there are to do.
There's three pages and the first i the home page to introduce the features of the website.
Second, is the NYC page and it illustrates the already reviews made be peoples experiences in different places in NY.
Underneath the reviews we can see the comments that others have for the main review and a comment form to express your thanks for going to this place or your interest.
Finally, the third and last page is the Review page and this where the form is that people make their of where they went to.
After completeing the form and hitting the submit, the pagge will redirect you to the NYC page.

## The First Steps

I started off my frontend with [npx create-react-app r-nyc- frontend].
I wrote out and create a visual to understand what components I would need.
I created folder for components and containers.
Then, I used bootstrap for my NavBar component and connected the routes all in the component.
The first section I focused on was the Review.js component so I could fire the POST request.
After, completing my backend on ruby I just wanted to make sure it would work.
To my pleasant reveal it worked on the first attemp after setting up my form and creating my POST request.

### Next Steps: Fetch and POST Request

When creating my NYC component I had to rethink about my struct because a lot is goingto happen on this page.
I wanted to map over the Reviews to display on this page and have a POST request through a form at the bottom of each Review.
Also, underneath the comment form display the comments for that particular Review.

After, creating the Review component, the container was created to fire off a GET request for the reviews and I passed in the information into PostCard.js as a prop.
The mapping I did on the PostCard component took me a while to get correct.
Taking into consideration the amount of activity that was happening on this page.
I had a issue after having my handleSubmit function take care of the POST request within the comment form underneath the Review.
I had to fix code on my back to correctly link my information to my review and creat the review_id.

When doing the mapping I deconstructed the prop called reviews to display the reviews form the ReviewForm component.
Mapping over ti take the wanted information on the page, such as title, location, description, price, and tags.
Comments for the reviews are nested in the reviews and has an review_id number.
