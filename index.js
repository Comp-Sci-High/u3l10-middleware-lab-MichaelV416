// INSTRUCTIONS: Write the code that does the following:
// -1 Set up the server correctly
// -2 console logs the method and URL for every request
// -3 sends back "Welcome to the Animal Shelter Network" as an h1 when the client goes to /
// -4 sends back the cat object when the client goes to /api/cat
// -5 sends back the shelters object when the client goes to /api/shelters
// -6 sends back "Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area" when the client goes to /docs
// -7 BLUE & PINK: sends back "A cat you can adopt is " with the name of the first cat when the client goes to /adopt/cat 
//    (Use dot notation & string concatenation)
// -8 sends back a 404 page for all other paths

// PINK Only: Add the correct status codes to ALL route handlers

const animalShelterData = {
    cats: [
        { name: "Whiskers", age: 2, shelter: "Happy Tails Shelter" },
        { name: "Mittens", age: 3, shelter: "Cozy Paws Sanctuary" },
        { name: "Shadow", age: 1, shelter: "Happy Tails Shelter" }
    ],
    shelters: [
        { name: "Happy Tails Shelter", location: "123 Main Street, Cityville" },
        { name: "Cozy Paws Sanctuary", location: "456 Oak Avenue, Townsburg" }
    ]
};
