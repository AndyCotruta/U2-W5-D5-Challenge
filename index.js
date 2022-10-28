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
  newCard.className = "cards";
  newCard.appendChild(h4);
  column.appendChild(newCard);
};

const removeCard = () => {
  const cards = document.getElementsByClassName("cards");
  console.log(cards);
  cards[cards.length - 1].remove();
};

const addNames = () => {
  const namesList = document.getElementsByTagName("li");
  console.log(namesList);
  const randomIndex = Math.floor(Math.random() * namesList.length);
  console.log(randomIndex);
  for (let i = 0; i < namesList.length; i++) {
    const cards = document.getElementsByClassName("cards");
    console.log(cards);
  }
};
