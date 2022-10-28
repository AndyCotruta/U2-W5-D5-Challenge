let arrayOfNames = [];

const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  let inputName = document.getElementById("input-name");
  const namesList = document.getElementById("names-list");
  let newName = document.createElement("li");
  newName.innerText = inputName.value;
  newName.className = "added-names";
  let breakline = document.createElement("div");
  breakline.className = "breakline";
  namesList.appendChild(newName);
  namesList.appendChild(breakline);
  inputName.value = "";
  arrayOfNames.push(newName);
});

const minusButton = document.getElementById("minus-button");
minusButton.addEventListener("click", () => {
  const inputNumber = document.getElementById("input-number");
  if (inputNumber.value > 0) {
    inputNumber.value--;
    removeCard();
  }
});
const plusButton = document.getElementById("plus-button");
plusButton.addEventListener("click", () => {
  const inputNumber = document.getElementById("input-number");
  inputNumber.value++;
  addCard();
});

const addCard = () => {
  const inputNumber = document.getElementById("input-number");
  const column = document.getElementById("second-column");
  const newCard = document.createElement("div");
  const h4 = document.createElement("h4");
  h4.innerText = `Team ${inputNumber.value}`;
  const ul = document.createElement("ul");
  ul.setAttribute("id", "team-list-container");
  newCard.className = "cards";
  newCard.appendChild(h4);
  newCard.appendChild(ul);
  column.appendChild(newCard);
};

const removeCard = () => {
  const cards = document.getElementsByClassName("cards");
  console.log(cards);
  cards[cards.length - 1].remove();
};

const assignButton = document.getElementById("assign-member");
assignButton.addEventListener("click", () => {
  let length = arrayOfNames.length;
  for (let i = 0; i < length; i++) {
    //checks the length of the array and loops over it
    const randomIndex = Math.floor(Math.random() * arrayOfNames.length); //generates a random index
    const pickedName = arrayOfNames[randomIndex].innerText; //picks and stores a random name from the Array
    const teamListContainer = document.querySelectorAll("#team-list-container"); //targetting the team cards
    const assignedName = document.createElement("li"); //creating an li element
    assignedName.innerText = pickedName; //assigning to the li, the previously stored pickedName
    teamListContainer[i % teamListContainer.length].appendChild(assignedName); //appends the li to the container
    arrayOfNames.splice(randomIndex, 1);
  }
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
  const teamListContainer = document.querySelectorAll("#team-list-container");
  const namesList = document.querySelectorAll("#names-list");
  for (let j = 0; j < namesList.length; j++) {
    namesList[j].remove();
  }

  for (let j = 0; j < teamListContainer.length; j++) {
    teamListContainer[j].remove();
  }
});
