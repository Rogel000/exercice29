import { Contact } from "./classe/contact.js";

document
  .getElementById("addContactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.querySelector('input[name="title"]:checked').value;
    const name = document.getElementById("name").value;
    const firstName = document.getElementById("firstName").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    const newContact = new Contact(
      title,
      name,
      firstName,
      dateOfBirth,
      phoneNumber,
      email
    );

    document.querySelector("#contactList tbody").innerHTML +=
      newContact.displayContact();

    document.getElementById("addContactForm").reset();
  });
