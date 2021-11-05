# Recipes Social Network

It allows users to register and log into users. In addition, it allows you to create, edit, list and delete receptacles. In the future, we want the possibility that other users can add opinions, rate, etc.

The project repository can be downloaded from Github:
1. [The Recipes Social Network](https://github.com/igomezgithub/udacity-recipes-social-network). It is a Angular-NestJS-MongoDB application which is dockerized and get up in a Kubernetes cluster.

## Setup Dev Environment

To prepare the development environment these are the requirements:

1. Be able to launch docker containers.
2. Install nodeJS globally, preferably this version: v14.18.1.
3. Install Postman, preferably the latest version.
4. Install Postman, preferably the latest version.
5. It is also recommended to install a Unix-style command console. I have used Gitbash for Windows environment.

The steps to set up the dev environment are:
1. Open a console from the root of the program, where the docker-compose files are located.
2. We launch the command to build the containers of our microservices:
```
    docker-compose -f docker-compose-build.dev.yaml build
```

3. We execute the containers to get up all the services:
```
    docker-compose up -d
```

4. We open another console in the project path: 
```
    /frontend/recipes-social-network
```

5. We execute this command to execute the frontend and open a browser with the main page 'http://localhost:4200':
```
    ng serve -o
```

## Use the App

The first time it is accessed, the user will be redirected to the Log In form. To create a new user you must click on the link 'Sign Up' to register a new user.

After entering the data to register, the application will send a token (JWT) that will allow it to be identified on the server for the following requests.

These are the sections that are working: 

- 'New Recipe': to add a new recipe. Required fields: Recipe Name, Ready In (minutes), Skill Level, Ingredients and Method (or steps).

- 'List of recipes': this is the main page.

- 'Edit Recipe': from the list of recipes you have to click at the end of each element and a contextual menu will appear. You must click on 'Edit'

- 'Remove Recipe': from the list of recipes you have to click at the end of each element and a contextual menu will appear. You must click on 'Delete'

- 'Log Out': remove the credentials and redirect to login form.

- 'Sign Up': to create a new user.


## API Testing with Postman for Local Environment

I have included a Postman config file with the RestAPI endpoints to launch several integrated tests.

The steps to start the **Recipes Social Network** feature test are as follows:

1. Open the Postman app and import this file **recipes-social-network-api.postman.postman_collection.json** (you can see it in the root of the project).
2. You must registry any user. Go to Auth folder and select this POST: */api/v0/auth/signup SignUp*. Go to the **Body** section and write this json with your name, username, email and password. For example:
 
```json
{
    "name": "user",
    "username": "userTest",
    "email": "user@mail.com",
    "password": "123456"
}
```
3. In the **Headers** section you can add this row:

```
{
	KEY = Content-Type,
	VALUE = application/json
}
```

4. Click on **Send** button and the response should be '201 Created'. 
5. Copy the **token** string (from json response) and override the Global Variable with name 'token'.

Login request:

6. Select this POST: */api/v0/auth/signin Signin*. Go to the **Body** section and write this json with your username and password. For example:

```json
{
    "username": "user",
    "password": "123456"
}
```

In the folder **/Recipes** there is another request that can be tested.

Additionally, there are other sections to implement new features in the future: **/Users** and **/Comments**.

## URL in AWS 

The url to connect to Recipe Social Network in production is: [Recipes Social Network](ab2456ddeca664a6b8ce6db2c1f9fbad-1350072888.us-east-2.elb.amazonaws.com).

 Note: You can use this user to test the application:
     
    Username: tests
    Password: 123456


## Project Description

You can read the **project_description.pdf** document to complete the project information.
