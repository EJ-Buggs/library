const form = document.querySelector(".form");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");

addBook.addEventListener("click", function () {
  form.classList.remove("form");
});

submit.addEventListener("click", function () {
  form.classList.add("form");
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  console.log(formData, FormData);

  const userData = {};

  formData.forEach(function (value, key) {
    userData[key] = value;
  });
  console.log(userData);
});

let myLibrary = [];

function Book() {}

function addBookToLibrary() {}
