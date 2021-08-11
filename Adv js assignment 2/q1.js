// Movies Data
// Api : https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
// Problem Statement : Fetch data from the given api
// Find list of movies done by each actor //Find name of actors and movies under each actor
// Find types of genres and movies under each genre
// Output will look similar to this
// {
// 	actors :[
// 			{
// 				Name : “”,
// 				Movies : []
// 			}
// 		],
// 	Genres : [
// 			{
// 				Type : “”,
// 				Movies : []
// 			}
// 		]
// }
// ---------------------------------------------------------------
// code : 

const fetch = require('node-fetch');

let result = {
    actors: [],
    genres: []
}

const getData = async () => {
    try {
        const info = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json');    //fetching the data
        if (info.status != 200) {
            throw new Error(" Not found . Error Code: ${info.status}")          // checking whether data is fetched or not
        } else {
            const movies = await info.json();                   // converting the data into json file
            movies.forEach(movie => {
                if (movie['cast'] != []) {            // checking if a movie has  cast
                    movie['cast'].forEach(cast => {
                        if (!result['actors'].find(actor => actor['name'] == cast)) {   // if actor of cast is not present in actor list
                            var actor = {                                              // storing the name of actor and movie
                                name: cast,
                                movies: [movie['title']]
                            }
                            result['actors'].push(actor);           // pushing the stored data into result array
                        } else {
                            for (const [index, actor] of result['actors'].entries()) {      
                                if (actor['name'] == cast) {                                    // checking for the actor name to push the movie title
                                    result['actors'][index]['movies'].push(movie['title']);      // pushing the movie title in 
                                }
                            }
                        }
                    });
                }
                if (movie['genres'] != []) {                  // checking if a movie has genres
                    movie['genres'].forEach(type => {
                        if (!result['genres'].find(genre => genre['type'] == type)) {  // if genres type is not their in list
                            var gen = {
                                type,                                      // pushing the type and title of movie in variable
                                movies: [movie['title']] 
                            }
                            result['genres'].push(gen);                      // pushing th variable in array result
                        } else {
                            for (const [index, gen] of result['genres'].entries()) {            // if genres type is already there
                                if (gen['type'] == type) {
                                    result['genres'][index]['movies'].push(movie['title']);      // pushing the movie title to that genres type
                                }
                            }
                        }
                    });
                }
            });
            console.log(JSON.stringify(result));           // converting the result into string
        }
    } catch (err) {
        console.error(err);
    }
};

getData();