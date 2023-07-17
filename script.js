const form = document.querySelector(".form");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");

addBook.addEventListener("click", function () {
  form.classList.remove("form");
});

submit.addEventListener("click", function () {
  form.classList.add("form");
});

let myLibrary = [];

function Book() {}

function addBookToLibrary() {}
