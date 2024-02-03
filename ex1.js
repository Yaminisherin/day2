let person = {
    name:"john",
    age:30,
    city:"New York"
};
for (let key in person){
    console.log(Object.values(person));
}