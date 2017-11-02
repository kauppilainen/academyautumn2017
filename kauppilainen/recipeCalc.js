

// Recipes
var onionSoup = {
    onion: 1,
    purjoloek: 1,
    cheese: 1,
    beefBroth: 4
}

var steak = {
    steak: 1,
    seasoning: 1,
    pommesfrites: 1
}

var gröt = {
    havregryn: 0.1,
}

// Shops
var ICA = {
    potato: 12,
    tomato: 7,
    cucumber: 3,
    corn: 5,
    onion: 10,
    purjoloek: 7,
    cheese: 50,
    beefBroth: 10,
    steak: 100,
    seasoning: 10,
    pommesfrites: 25,
    havregryn: 15
}

var COOP = {
    potato: 15,
    tomato: 8,
    cucumber: 4,
    corn: 6,
    onion: 15,
    purjoloek: 8,
    cheese: 60,
    beefBroth: 12,
    steak: 120,
    seasoning: 15,
    pommesfrites: 26,
    havregryn: 16
}

// Array of Shops
var shopList = [ICA, COOP];

function getCost (recipe, shop){
    var sum = 0;

    for(var key in recipe){
        sum += recipe[key] * shop[key];
    }
    return sum;
}

function findCheapestShop(recipe, shopList){
    var sum = 0;
    sumCheap = Number.MAX_VALUE;

    for(var key in shopList){
        
    }
}