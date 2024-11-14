
// const gadget = new Map();

// gadget.set("laptop", 2000);
// gadget.set(6678,"del");




const location = new Map()

location.set("ogonbo", "Ikeja");
location.set("akure", "akure")
location.set("eleko", "ikeja")
location.set("sango", "abeokuta")

console.log(location);
console.log(location.keys())

function getKeyByValue(map, value){
    for(let [key, val ] of map){
        if(key === value){
            return val;
;        }
    }
    return "you put in the wronge info";
}

const valueTofind = "eleko";
const key = getKeyByValue(location, valueTofind)
console.log(key)

