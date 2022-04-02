# Phase 3 - NYC Backend In Ruby

## Summary

I know that for my page I needed my data base to take in Reviews and
 reviews would have many comments.
 Reviews would take in a title, location, description, image URL, price,
  and have tags.
Comments would belong to reviews and would have a review_id after using the
 powerful features of Active Record to generate the tables basic details in the schema.

## Introduction

I stared by going to Rakefile and creating my own task that would take care
 destroying, and creating the data in my seeding file, destroying the database,
 and doing the neccessary migrations to before the seeding.
I also, added messaging in each step of the seeding so I can have an idea
 where the process in is the terminal while testing/setting up my database.

The Rakefile.rb task I created is called by typing **rake rest_db** that uses
**Active Record** to run all those features for me when I need them instead
of doing them one by one.

by a separate **React frontend** that interacts with the database via the API.

## Sinatra

For this project, I used three features of the CRUD:

- Get was used twice to illustrate the Reviews and Comments.
- POST was used to create the the Reviews and a second time for the comments
 underneath the Review post.
- I created API routes in Sinatra that handles these fetures with two
Active Record Models.
  actions for at least one of your Active Record models.
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Using OO design patterns I have separate classes for each of my
  models, and create instance and class methods as necessary.
  