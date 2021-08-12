# Adv_JS_Assignment

Assginment 1

1) Get battles.json via. AJAX call
From battle json provide following output

(For AJAX to work in this one, you’ll have to host your json online and then you can access the data from that url. You can skip this step and directly load json from a file or take it in a variable and can access json into your code, since ajax calls will be covered in the next 3 tasks.)

{
'most_active':{
'attacker_king',
'defender_king',
'region',
'name'
},
'attacker_outcome':{
'win', // total win
'loss' // total loss
},
'battle_type':[], // unique battle types
'defender_size':{
'average',
'min',
'max'
}
}

2) Use the following API to find the repository from git using git search API using ajax.
Consider input as the search parameter.
**Try to solve this problem in promise , async await and callbacks

Visit this api to know moreI : https://developer.github.com/v3/search/
Api documentation :
https://api.github.com/search/repositories?q={{input from text}}


From that api this output is expected:

{
"name": "node",
"full_name": "nodejs/node",
"private": false,
"owner":{
"login":"owner.login",
"name":" API call to result.owner.url ",
“followersCount”:”API call to result.owner.url”,
““followingCount”:”API call to result.owner.url”,”
},
“licenseName”:”license.name”,
"score":”score”
"numberOfBranch":"API call to result.branches_url and count the    result"
}


3) API: http://api.nobelprize.org/v1/prize.json ->
**Solve the following problem using async-await and promise (.then .catch)
** Use array methods
Fetch all data from API and find all the entries from year 2000 to 2019 and then find people who won prizes for category 'Chemistry'.

-----------------------------------------------------------------------------------------------------------------
Assignment 2 
--------------------------------------------------------------------------------
Q 1 :
Movies Data
Api : https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
Problem Statement : Fetch data from the given api
Find list of movies done by each actor //Find name of actors and movies under each actor
Find types of genres and movies under each genre
Output will look similar to this
{
actors :[
{
Name : “”,
Movies : []
}
],
Genres : [
{
Type : “”,
Movies : []
}
]
}

Q 2 :
Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.
Write a class called QueenAttack
Create constructor that initializes the position for two queens
Create a function canAttack which determines whether based on two position the queens can attack each other or not
*Position will be based on matrix system ie first position will be [0,0] and last will be [7,7]

