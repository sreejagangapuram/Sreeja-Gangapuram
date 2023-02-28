---
toc: true
layout: post
description: CPT Write-Up. 
categories: [markdown, week 22]
title: My Feature's CPT Write-Up. 

--- 
# Row 1 
The overall purpose of the program is to allow users to acess a game. The user can create an account, and use that account to login. The input are the users credentials, such as their name, email, and password, and the output is a message, either allowing the user into the game page or telling them to make an account. 

# Row 2
<img src="{{site.baseurl}}/images/poop.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 
Using the User.query.all(), we are fetching all of the users from the 'users' table  and storing into the list users. The name of the variable is 'users.' The data contained in this list is the user's information, including their username, email, and password. 

# Row 3
No current list is being used to manage complexity. Will add later. 

# Row 4
<img src="{{site.baseurl}}/images/create.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 
In the create method, it takes the instance of User as a parameter and it creates a row in the user table using the username, email, and password paramters of object that is passed in. This is being called from the image below. 
<img src="{{site.baseurl}}/images/callingcreate.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 

# Row 5
<img src="{{site.baseurl}}/images/ooo.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 
To create a new registration, we are getting the username, passward, and email from the request and checking check if the user exists in the database. If the user exists, we are throwing an error message saying that the user already exists and to sign up and create a new account. If the user doesn't exist, the new registration is created with this username, email, and password and the sucess message is returned. 

# Row 6 
<img src="{{site.baseurl}}/images/1212.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 
In the request body, if we pass in username = john, email = john@example.com, then the registration will fail and throw the error message. If we pass in a user that doesn't exist like hello123, hello@gmail.com, and passward = password, the registration will be sucesssful and we will get back the registration sucess message. 
