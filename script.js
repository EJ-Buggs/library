let myLibrary = [];
let currentIndex = 1;
const form = document.getElementById("form");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const inputFields = form.querySelectorAll("input");
const checkButton = document.getElementById("readCheckbox");
let readBtn = "";
const cardToRemove = document.querySelector(`.card${currentIndex - 1}`);

const cardContainer = document.querySelector(".cardContainer");

function addCard() {
  const card = document.createElement("div");
  card.classList.add(`card${currentIndex - 1}`);
  card.classList.add("card");

  const lastBook = myLibrary[myLibrary.length - 1];
  const bookInfo = document.createElement("p");
  if (lastBook) {
    bookInfo.textContent = `Title: ${lastBook.data.title}, Author: ${lastBook.data.author}, Pages: ${lastBook.data.pages}`;
  }

  readBtn = document.createElement("button");
  readBtn.classList.add(`button${currentIndex - 1}`);
  readBtn.classList.add("readBtn");

  const readCheckbox = document.createElement("input");
  readCheckbox.setAttribute("type", "checkbox");
  readCheckbox.classList.add("readCheckbox");

  let isChecked = readCheckbox.checked;
  readBtn.textContent = isChecked ? "Not read" : "Read";
  readBtn.style.backgroundColor = isChecked ? "#ff9c9c" : "#9fff9c";

  readBtn.addEventListener("click", function () {
    isChecked = !isChecked;
    readCheckbox.checked = isChecked;
    readBtn.textContent = isChecked ? "Not read" : "Read";
    readBtn.style.backgroundColor = isChecked ? "#ff9c9c" : "#9fff9c";
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.classList.add(`remove${currentIndex - 1}`);
  removeBtn.textContent = "Remove";

  const cardIndex = currentIndex - 1;

  removeBtn.addEventListener("click", function () {
    const cardToRemove = document.querySelector(`.card${cardIndex}`);
    if (cardToRemove) {
      cardContainer.removeChild(cardToRemove);
    }
  });

  card.appendChild(bookInfo);
  card.appendChild(readBtn);
  card.appendChild(removeBtn);
  //card.appendChild(readCheckbox);
  cardContainer.appendChild(card);
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  form.setAttribute("data-index", currentIndex);
  const formIndex = form.getAttribute("data-index");
  currentIndex++;

  const formDataObject = { index: formIndex, data: {} };
  formData.forEach((value, key) => {
    formDataObject.data[key] = value;
  });

  myLibrary.push(formDataObject);

  addCard();

  inputFields.forEach((input) => {
    input.value = "";
  });

  console.log(myLibrary);
}

form.addEventListener("submit", handleSubmit);

console.log(myLibrary);
