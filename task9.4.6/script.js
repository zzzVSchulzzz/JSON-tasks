let me = {
    "name": "Valery Medyanikova",
    "age": 22,
    "city": "Krasnodar",
    "study": "coding"
};

let meJson = JSON.stringify(me);
    meBackObject = JSON.parse(meJson);

console.log(meJson)
console.log(meBackObject)
