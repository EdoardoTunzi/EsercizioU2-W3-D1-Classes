/*Esercizio 1 : Crea una classe User per la creazione di oggeti di tipo "utente". I suo costrutore dovrà inizializzare ogni oggetto utente coni seguenti attributi:
- firstName
- lastName
- age
- location
Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
Ad esempio, date due istanze della classe utente "x" e "y" inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a "x è più vecchio di y" a seconda del risultato del confronto.
Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente*/

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAges(anotherUser) {
    //return this.age > anotherUser.age ? `${this.firstName} is older than ${anotherUser.firstName}` : `${anotherUser.firstName} is older than ${this.firstName}`;
    if (this.age > anotherUser.age) {
      return `${this.firstName} is older than ${anotherUser.firstName}`;
    } else if (this.age < anotherUser.age) {
      return `${anotherUser.firstName} is older than ${this.firstName}`;
    } else {
      return `${this.firstName} and ${anotherUser.firstName} are the same age`;
    }
  }
}

const x = new User("Mario", "Rossi", 24, "Milano");
const y = new User("Giovanni", "Bianchi", 35, "Roma");

console.log(x.compareAges(y));

/* Esercizio 2 : Crea un form per la creazione di oggetti "Pet" (animali domestici).
La classe Pet dovrà essere dotata delle seguenti proprietà:
- petName
- ownerName
- species // (cane, gatto, coniglio etc.)
- breed // (labrador, soriano, nano etc.)
Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due
animali condividono lo stesso padrone.
Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.*/

// assegno i nodi a variabili
let petNameInput = document.getElementById("petName");
let ownerNameInput = document.getElementById("ownerName");
let animalSpecieInput = document.getElementById("species");
let breedInput = document.getElementById("breed");
let submitBtn = document.getElementById("submitBtn");
let petList = document.getElementById("list");
let petForm = document.querySelector("form");
//creo un array per contenere gli oggetti pet che creo
let petsArr = [];

// creao classe Pet
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  hasSameOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName;
  }
}
//funzione per aggiungere elementi alla ul sotto il form e mostrarli
const showAnimalList = () => {
  //la svuoto per farla rigenerare da zero ed evitare ripetizioni
  petList.innerHTML = "";
  //ciclo l'array di Pets per generare gli elementi li e aggiungerli alla lista
  petsArr.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `Pet name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(newLi);
  });
};
// click event sul Submit button del form
submitBtn.addEventListener("click", function (event) {
  //evito il refresh
  event.preventDefault();
  //creo un nuovo
  let newPet = new Pet(petNameInput.value, ownerNameInput.value, animalSpecieInput.value, breedInput.value);
  petsArr.push(newPet);
  showAnimalList();
  //reset valori input con reset(), più veloce di specificare singolarmente il reset dei singoli valori.
  petForm.reset();
  /*petNameInput.value = "";
  ownerNameInput.value = "";
  breedInput.value = "";
  animalSpecieInput.value = "";*/
});
