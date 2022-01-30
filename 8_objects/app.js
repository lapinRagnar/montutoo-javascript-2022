// Introduction object

course = {
    title: 'Apprendre css gratuitement',
    lessons: 16,
    creator: "Monsieur lapin",
    length: 62,
    level: 2,
    isFree: true,
    tags: ['html', 'css', 'js']

}

// pour acceder aux données
console.log(course.length)
console.log(course.level)
console.log(course.tags)
console.log(course['tags'])

/**
 *  - create a person object that contains keys: name, age, country
 *  - use yourself as an example to set the values for name, age, country
 * 
 *  - create a function, logData(), that uses the person object to create
 *      a string in the following format:
 *      "Rabe is 35 years old and lives in Norway"
 * 
 *  - call the logData() function to verify that it works
 */

person = {
    name: "Bitro",
    age: 15,
    country: "france"
}

logData = ()=>{
    console.log(person.name + " a " + person.age + " ans et vit en " + person.country);
}

logData()