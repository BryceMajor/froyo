// Intial Prompt
const userEnteredOrder = prompt(
    "Enter a list separated by commas of all the froyo you would like"
);

// splits the enetered string at the comma
const flavor = userEnteredOrder.split(",");

// defines our base
const froyoOrder = {};

// this will proccess the entered order into the table
for(let i = 0; i < flavor.length; i++){
    let enteredFlavor = flavor[i]
    if (enteredFlavor in froyoOrder){
        froyoOrder[enteredFlavor] += 1
    } else {
        froyoOrder[enteredFlavor] = 1
    }
};

console.table(froyoOrder);
