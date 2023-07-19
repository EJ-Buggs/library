let myLibrary = [];
let currentIndex = 1;
const form = document.getElementById("form");
const addBook = document.querySelector(".add-book");
const submit = document.querySelector(".submit");

addBook.addEventListener("click", function () {
  form.classList.remove("form");
});

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

  console.log(myLibrary);
}

form.addEventListener("submit", handleSubmit);

console.log(myLibrary);
