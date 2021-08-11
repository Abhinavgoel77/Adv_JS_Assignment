// 3) API: http://api.nobelprize.org/v1/prize.json ->
// **Solve the following problem using async-await and promise (.then .catch)
// ** Use array methods
// Fetch all data from API and find all the entries from year 2000 to 2019 and then find people who won prizes for category 'Chemistry'.

// ----------------------------------------------------------------------------   
// Answer :

const fetch = require("node-fetch");

url = 'http://api.nobelprize.org/v1/prize.json'

const getData = async () => {
    try {
        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error(`Error`)
        } else {
            const prizes = await res.json();
            prizes.prizes.forEach(prize => {
              
                if ((prize.year >= 2000) && (prize.year <= 2019) && (prize.category === "chemistry")) {  // checking the data acc to given conditions
                    console.log(`\nYEAR: ${prize.year}`);                                               // printing the year of the prize won
                   
                    prize.laureates.forEach(laureate => {
                        console.log(`${laureate.firstname} ${laureate.surname}`);
                    });
                }
            });
        }
    } catch (err) {
        console.error(err.message);
    }
};

getData();