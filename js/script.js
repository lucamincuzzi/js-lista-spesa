groceriesList = ["mela", "latte", "burro", "cacao", "caffè"];
groceriesString = "";
let i = 0;
while (i < groceriesList.length) {
    groceriesString += ` ${groceriesList[i]}`;
    i++;
}
console.log(groceriesString)
document.querySelector("body").innerHTML += `<div class="groceries-container"><p class="groceries">${groceriesString}</p></div>`