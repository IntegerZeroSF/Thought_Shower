# Project Overview


## Project Description

Creating a Web applicaiton called Thought_Shower that will allow site visitor to populate ideas that can be viewed by the general puplic.  The general form will allow an indiviual to generate / input their idea.  It will the be displayed on the general site for other to view.

## Project Links

- [Front-end Repo: https://github.com/IntegerZeroSF/Thought_Shower]()
- [Back-end Repo: https://github.com/KJFreys1/thought-shower-backend]()

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [https://github.com/IntegerZeroSF/Thought_Shower/blob/master/frontend/wireframe1.png]()
- [https://github.com/IntegerZeroSF/Thought_Shower/blob/master/frontend/wireframe2.png]()



Define the the React components and the architectural design of your app.

### MVP/PostMVP - 5min

MVP:
The site visitor will be able to:
-	Be presented with a list of ideas.
	 -	It could be for new applications, games, and etc. 
-	Be able to generate a new idea.
- Update or delete ideas.

Post MVP:
The site visitor will be able to:
 - Filter the ideas by category. 
 - Vote, thumbs up or thumbs down
 - Create a user account so they can add comments
 - Share ideas

#### MVP EXAMPLE
A user would come to the site.  He or she will be presented with the list of ideas and review what ideas are currently on the site.  If he or she has a new idea they can create a new idea (Update, or Delete) which will be added to the list.

#### PostMVP EXAMPLE
The user will come to the site.  He or she will be presented with a list of ideas and be able to search or filter by categories.  He or she will be able to create an account so the site can be more interactive.  Have a way to favorite idea, share and possbile generate an email to the creator of the idea.

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

| Components and Descriptions | 
| --- | :---: | 
|	Header -- Provide the user with links to create, browse, about us and back to home throughout the application. |
| Home -- The landing page for the application.  Presents the user with a browse the existing ideas or create a new one.|
|	TitleView --  A place to view all of the existing ideas. From here the user can add, update, or delete an idea.
| FullCard -- Present the user with the full details of the idea.
|	Create --	Provide the user a place to add a new idea to the site.|
|	Update -- Allow the user to update an existing idea. 	| 
|	Delete -- Allow the user to delete an idea.  |
|	Login - Allows the user to create a user ID and password and then login |
| About Us -- Give an explaination of the site.


## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframes | H | 2hrs| 2 | 2 |
| CSS | H | 5hrs| 20 | 20 |
| Backend running | H | 1hrs| 1 |1 |
| Backend completed 	| H | 1hrs |1  |1  |
| Backend tested 	| H | 2hrs | 3 |3 |
| Backend Deployed 	| H | 2hrs | 1 | 1 |
| Home 	| H | 2hrs | 3| 3 |
| About 	| M | 2hrs |1 |1  |
| Card List 	| H | 2hrs |1 |1  |
| Card | M | 2hrs | 2 |2  |
| Input Form | H | 2hrs |3  |3  |
| Update  | M | 2hrs | 1 |1  |
| Delete | M | 2hrs |  1| 1 |
| CreateUser | L | 2hrs | 2 |2  |
| MaintainUser | L | 2hrs | 2 |2  |
| DeleteUser | L | 2hrs | 2 |2  |
| Search | L | 2hrs | 0 |0  |
| Verify and Debug | H | 10hrs |  |  |
| Total | H | 44hrs|  |  |

## Additional Libraries
React, React-Bootstrap, React-Helmet, Mongoose, Express,
HTML5, CSS3, and anything else we may have come up with!

## Installation Instructions

Clone the code from the GitHub repositories above.
for the front-end and back-end you will need to install the following dependencies.

Back-end: body-parser, cors, express, jsonwebtoken, bcryptjs,config, mongoose, nodemon, mocha, chai, supertest

Front-end: axios, react-bootstrap, react-helmet,react-router, react-router-dom, react-scripts,   enzyme-adapter-react-15

## Code Snippet



## Issues and Resolutions

### Error ###


### Resolution ###

### Error ###

### Resolution ###

### CSS Issues ###
We had an issue getting the application header to view properly on a mobile view.

### Testing Issue ###
Testing the back-end and front-end each a couple issues.  On the beck-end side it was difficult to create a test that would delete a user comment properly and be able to verify it.  On the front-end we had one issue trying to test the full detals view.  We also had a difficult time getting the front-end testing just to work since it had been a while.

### Resolution ###
On the back-end was eventually able to get the comment to delete with proper verification.  There was some user error getting this to work.  

On the front-end we had to modify part of the code for the full detail view so the test was complete successfully.


 