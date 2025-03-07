// Task 2 - Adding Employee Cards Dynamically

let cnt = 0; //Ensure unique ids

function createElement(name, position) {
    const employeeContainer = document.getElementById("employeeContainer") //Find employee container by id
    let card = document.createElement("div"); //Employee card

    card.setAttribute("class", "employeeCard"); //Set attributes
    card.setAttribute("id", 'employee${cnt}'); //Set unique id attribute
    card.innerHTML = '<h3>${name}</h3><p>${position}</p>'; //Employee name header, employee position
};
