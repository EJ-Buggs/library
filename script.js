let myLibrary = [];
let currentIndex = 1;
const form = document.getElementById("form");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");
const inputFields = form.querySelectorAll("input");

const cardContainer = document.querySelector(".cardContainer");

function addCard() {
  const card = document.createElement("div");
  card.classList.add(`card${currentIndex - 1}`);
  card.classList.add("card");

  const lastBook = myLibrary[myLibrary.length - 1];
  if (lastBook) {
    card.textContent = `Title: ${lastBook.data.title}, Author: ${lastBook.data.author}, Pages: ${lastBook.data.pages}`;
  }
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
