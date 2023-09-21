import people from "./array";

function searchPeople(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = list.filter((person) => {return person[searchField] == searchValue});
        if (results.length > 0) resolve(results);
        else reject(`За пошуком за умовою "${searchField}: ${searchValue}" не знайдено.`);
      }, 2000);
    });
  }
  
let a = searchPeople(people, "age", 45)
    .then((results) => {
    console.log("Результати пошуку:", results);
    })
    .catch((error) => {
    console.error("Помилка:", error);
    });

console.log(a)

export default a;