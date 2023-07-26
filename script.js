let myLibrary = [];
let currentIndex = 1;
const overlay = document.querySelector(".overlay");
const formContainer = document.querySelector(".formContainer");
const form = document.getElementById("form");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const inputFields = form.querySelectorAll("input");
const checkButton = document.getElementById("readCheckbox");
const cardContainer = document.querySelector(".cardContainer");
const cardToRemove = document.querySelector(`.card${currentIndex - 1}`);
let readBtn = "";

const readCheckbox = document.createElement("input");
readCheckbox.setAttribute("type", "checkbox");
readCheckbox.classList.add("readCheckbox");

addBook.addEventListener("click", function () {
  formContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

overlay.addEventListener("click", function () {
  formContainer.classList.add("hidden");
  overlay.classList.add("hidden");
});

function addCard() {
  const cardIndex = currentIndex - 1;

  const card = document.createElement("div");
  card.classList.add(`card${currentIndex - 1}`);
  card.classList.add("card");

  const lastBook = myLibrary[myLibrary.length - 1];
  const bookInfo = document.createElement("p");
  if (lastBook) {
    bookInfo.textContent = `Title: ${lastBook.data.title}, Author: ${lastBook.data.author}, Pages: ${lastBook.data.pages}`;
  }

  readBtn = document.createElement(`button`);
  readBtn.classList.add(`readBtn${currentIndex - 1}`);
  readBtn.classList.add("readBtn");

  let isChecked = readCheckbox.checked;

  readBtn.addEventListener("click", function () {
    isChecked = !isChecked;
    readCheckbox.checked = isChecked;
    this.textContent = isChecked ? "Not read" : "Read";
    this.style.backgroundColor = isChecked ? "#ff9c9c" : "#9fff9c";
  });

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  removeBtn.classList.add(`remove${currentIndex - 1}`);
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", function () {
    const cardToRemove = document.querySelector(`.card${cardIndex}`);
    if (cardToRemove) {
      cardContainer.removeChild(cardToRemove);
    }
  });

  card.appendChild(bookInfo);
  card.appendChild(readBtn);
  card.appendChild(removeBtn);
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
  if (!checkButton.checked) {
    readBtn.textContent = "Not read";
    readBtn.style.backgroundColor = "#ff9c9c";
  } else {
    readBtn.textContent = "Read";
    readBtn.style.backgroundColor = "#9fff9c";
  }
  console.log(myLibrary);

  formContainer.classList.add("hidden");
  overlay.classList.add("hidden");
}

form.addEventListener("submit", handleSubmit);

console.log(myLibrary);
