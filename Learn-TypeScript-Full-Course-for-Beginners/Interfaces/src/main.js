var user = {
    name: 'Khris',
    age: 30,
    getMessage: function (name) {
        return "Hello ".concat(name);
    }
};
var user2 = {
    name: "Jack",
    getMessage: function (name) {
        return "Hello ".concat(name);
    }
};
console.log(user.getMessage("Daniel"));
