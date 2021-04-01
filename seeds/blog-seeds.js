// base code referenced from ecom backend homework
const { Blog } = require('../models');

const blogData = [
  {
    "title": "Music Near Me",
    "content": "A mobile app that will send you notifications whenever a concert is playing in your area.",
    "user_id": 1,
    

  },
  {
    "title": "The Ultimate Tech Quiz",
    "content": "A web app that will give users 10 new technical questions each day and track their progress in things like programming, cybersecurity, database architecture, and more!",
    "user_id": 1,
    
  },
  {
    "title": "Roll 'Em Up",
    "content": "A game for Windows and macOS where players move a ball through a series of increasingly challenging mazes.",
    "user_id": 2,
    
  },
  {
      "title": "Working for the Weekend",
      "content": "This is a list of fun things to do.",
      "user_id": 3,
      
  }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;