let user = {
    name: "Северин",
    age: 34,
    location: "Київ",
    profession: "Касир",
    getInfo: function(){
        return `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}, Profession: ${this.profession}`
    }
};

console.log(user.getInfo());