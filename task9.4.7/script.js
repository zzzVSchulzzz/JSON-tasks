let user = {
    "city": "Saint-Petersburg",
    "name": "Petr",
    "age": "25",
};

let userJson = JSON.stringify(user, ['name']);

console.log(userJson)