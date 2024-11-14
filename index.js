let contactBook = {
    contacts: [
        { name: "Alice", phone: "123-456-7890", email: "alice@example.com" },
        { name: "Bob", phone: "234-567-8901", email: "bob@example.com" }
    ],
    findContactByName(name) {
        let findContact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) || "Контакт не знайдено";
        if (findContact !== "Контакт не знайдено") {
            return `name: ${findContact.name}, phone: ${findContact.phone}, email: ${findContact.email}`;
        } else {
            return findContact;
        }
    },
    addContact(name, phone, email) {
        this.contacts.push({ name, phone, email });
        console.log(`Контакт з ім'ям ${name} успішно додано.`);
    },
    viewBook(book = this.contacts){
        for (let x of book) {
            console.log(`Name: ${x.name}, phone: ${x.phone}, email: ${x.email}`);
        }
    }
};

console.log(contactBook.findContactByName("Alice"));
contactBook.addContact("Charlie", "345-678-9012", "charlie@example.com");
contactBook.viewBook();