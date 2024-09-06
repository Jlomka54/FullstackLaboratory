"use strict";

const formData = { client_email: "", client_comment: "" };

if (localStorage.length > 0) {
  const storedData = localStorage.getItem("wt-form-data");
  if (storedData) {
    const { client_email, client_comment } = JSON.parse(storedData);
    formData.client_email = client_email ?? "";
    formData.client_comment = client_comment ?? "";
  }
}

const form = document.querySelector(".wt-form");

form.elements.client_email.value = formData.client_email;
form.elements.client_comment.value = formData.client_comment;

form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem("wt-form-data", JSON.stringify(formData));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formData.client_email === "" || formData.client_comment === "") {
    return;
  }

  console.log(formData);
  formData.client_email = "";
  formData.client_comment = "";
  localStorage.removeItem("wt-form-data");
  form.reset();
});