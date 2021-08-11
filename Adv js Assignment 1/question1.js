// 1) Get battles.json via. AJAX call
// From battle json provide following output

// (For AJAX to work in this one, you’ll have to host your json online and then you can access the data from that url. You can skip this step and directly load json from a file or take it in a variable and can access json into your code, since ajax calls will be covered in the next 3 tasks.)

// {
// 'most_active':{
//     'attacker_king',
//     'defender_king',
//     'region',
//     'name'
// },
// 'attacker_outcome':{
//     'win', // total win
//     'loss' // total loss
// },
// 'battle_type':[], // unique battle types
// 'defender_size':{
//     'average',
//     'min',
//     'max'
//     }
// }

// ----------------------------------------------------------------------------   
// Answer :

const battles = require('./battles.json')

let attacker = {};
let defender = {};
let regions = {};
let names = {};
let sum = 0;

let result = {                           // for storing the ouput result
    most_active: {
        attacker_king: "",
        defender_king: "",
        region: "",
        name: "",
    },
    attacker_outcome: {
        win: 0,
        loss: 0
    },
    battle_type: [],
    defender_size: {
        average: 0,
        min: 99999999999,
        max: 0
    }
};

const getMax = obj =>{               // will return the the key with max value
    let max = 0;
    let answer = "";
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key]
            answer = key
        }
    }
    if(max==1) return "All records occur exactly once"
    return answer;
}

battles.forEach(battle=> {
    attacker[battle["attacker_king]"]] = attacker[battle["attacker_king"]] ? attacker[battle["attacker_king"]] + 1 : 1 ;
    defender[battle["defender_king"]] = defender[battle["defender_king"]] ? defender[battle["defender_king"]] + 1 : 1 ;
    regions[battle["region"]] = regions[battle["region"]] ? regions[battle["region"]] + 1 : 1 ;
    names[battle["name"]] = names[battle["name"]] ? names[battle["name"]] + 1 : 1 ;

    if(battle["attacker_outcome"]  == "win") result.attacker_outcome.win +=1;                     // count the no. of won battles
    if(battle["attacker_outcome"]  == "loss") result.attacker_outcome.loss +=1;                    // count the no. of lost battles

    if(! result.battle_type.includes(battle["battle_type"]))  result.battle_type.push(battle["battle_type"])

    if(battle["defender_size"]){
        sum += battle["defender_size"];
        if(result.defender_size.min > battle["defender_size"]){
            result.defender_size.min = battle["defender_size"];
        }
        else if(result.defender_size.max < battle["defender_size"]){
            result.defender_size.max = battle["defender_size"];
        }
    }
});

console.log(attacker)
result.most_active.attacker_king = getMax(attacker);
result.most_active.defender_king = getMax(defender);
result.most_active.region = getMax(regions);
result.most_active.name = getMax(names);

result.defender_size.average = (sum/battles.length).toFixed(2);     // average of sum to upto 2 decimal digits

console.log(result);
