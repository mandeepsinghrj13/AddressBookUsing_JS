class Contact {
  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  toString() {
    return (
      "First-Name = " +
      this.firstName +
      " Last-Name = " +
      this.lastName +
      " Address = " +
      this.address +
      " City = " +
      this.city +
      " State = " +
      this.state +
      " Zip = " +
      this.zip +
      " Phone-Number = " +
      this.phoneNumber +
      " email = " +
      this.email
    );
  }
}

let contact = new Contact(
  "Mandeep",
  "Singh",
  "Sriganganagar",
  "Ganganagar",
  "Rajasthan",
  335001,
  9166677858,
  "mandeep@gmail.com"
);
console.log(contact.toString());
