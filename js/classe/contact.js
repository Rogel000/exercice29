class Contact {
  constructor(title, name, firstName, dateOfBirth, phoneNumber, email) {
    this.title = title;
    this.name = name;
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

 
  displayContact() {
    return `
            <tr>
                <td>${this.title}</td>
                <td>${this.name}</td>
                <td>${this.firstName}</td>
                <td>${this.dateOfBirth}</td>
                <td>${this.phoneNumber}</td>
                <td>${this.email}</td>
            </tr>
        `;
  }
}

export { Contact };
