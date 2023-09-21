import searchPeople from "./searchPeople.js";
import people from "./array.js";

const year = 2023;
const greeting = (name, birthYear = 2000)=>{
    console.log(`Я ${name}, мені ${year-birthYear} років`)
}
greeting("Anna")


/*=====Task 8=====*/
searchPeople(people, 'name', 'Person 5')
    .then(result => console.log("Результати пошуку:", result))
    .catch(error => console.error("Помилка:", error));
searchPeople(people, 'age', 35)
    .then(result => console.log("Результати пошуку:", result))
    .catch(error => console.error("Помилка:", error));
searchPeople(people, 'weight', 55)
    .then(result => console.log("Результати пошуку:", result))
    .catch(error => console.error("Помилка:", error));