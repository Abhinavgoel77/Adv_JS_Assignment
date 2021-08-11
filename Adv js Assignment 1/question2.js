// 2) Use the following API to find the repository from git using git search API using ajax.
// Consider input as the search parameter.
// **Try to solve this problem in promise , async await and callbacks

// Visit this api to know moreI : https://developer.github.com/v3/search/
// Api documentation :
// https://api.github.com/search/repositories?q={{input from text}}


// From that api this output is expected:

// {
// 	"name": "node",
//       	"full_name": "nodejs/node",
//       	"private": false,
// 	"owner":{
//   		"login":"owner.login",
// 		"name":" API call to result.owner.url ",
//             “followersCount”:”API call to result.owner.url”,
//             ““followingCount”:”API call to result.owner.url”,”
//         },
//        “licenseName”:”license.name”,
//        "score":”score”
//        "numberOfBranch":"API call to result.branches_url and count the    result"
// }

// ----------------------------------------------------------------------------   
// Answer :


const fetch = require("node-fetch");
const lists = []

const outputFormat = {
    name: "",
    full_name: "",
    private: "",
    owners: {
      login: "",
      name: "",
      followersCount: "",
      followingCount: "",
    },
    licenseName: "",
    score: "",
    numberOfBranch: ""
  }
  const getSingleItem = async (result) => {
    var list = {
        ...outputFormat
    };
    list.name = result.name;
    list.full_name = result['full_name'];
    list.private = result['private'];
    list.owners.login = result['owner']['login'];
    list.licenseName = result['license'];
    list.score = result['score'];
    // the rest of the data which is not stored in result comes under api limitations .
    return list;
  }

const extractData = async (info) => {
   for(i of info['items']) {                                        // traversing the data 
      var list = await getSingleItem(i);                     
      lists.push(list);                                           //  pushing the result to array 
   }
   return lists; 
}

const myFunction = async() => {
    let query = $("input").val();
    console.log(query)
    url = 'https://api.github.com/search/repositories?q=' + query;  
    fetch(url)                                                              // fetching the data from api
    .then( (apidata) => {
        return apidata.json();
    })
    .then( (actualdata) => {
        const res = extractData(actualdata);                 // calling the function of extract data
        return res;
    })
    .then( (res) => {
        console.log(res);                                      // printing the final result
    })
    .catch ( (error)  => {
        console.log(error)
    })
   
}
