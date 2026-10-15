const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
  watched: true,
};

/* // TODO 1: Print the movie title

console.log(movie.title); */

// TODO 2: Print the director's name

/* console.log(movie.director); */

// TODO 3: Print true/false — is runtime over 120?

/* if (movie.runtime > 120){
    console.log(true);
}
else{
    console.log(false);
} */

// TODO 5: Print each key-value pair

/* console.log("Title:", movie.title);
console.log("Year:", movie.year);
console.log("Director:", movie.director);
console.log("Rating:", movie.rating);
console.log("Runtime:", movie.runtime);
console.log("Watched:", movie.watched); */

function createStudent(name, grade, gpa, isHonors) {
  console.log(`Name: ${name}`);
  console.log(`Grade: ${grade}`);
  console.log(`Gpa: ${gpa}`);
  if (gpa >= 3.5){
    isHonors = true
    return `Is Honors: ${isHonors}
    `;
  }
  else{
    isHonors = false
    return `Is Honors: ${isHonors}
    `;
  }
}

console.log(createStudent("Alex", 11, 3.7));
console.log(createStudent("Sam", 10, 2.9));