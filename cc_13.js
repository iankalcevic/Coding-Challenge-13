// Task 2 - Adding Employee Cards Dynamically

let cnt = 0; //Ensure unique ids

function createElement(name, position) {
    const employeeContainer = document.getElementById("employeeContainer") //Find employee container by id
    let card = document.createElement("div"); //Employee card

    card.setAttribute("class", "employeeCard"); //Set attributes
    card.setAttribute("id", 'employee${cnt}'); //Set unique id attribute
    card.innerHTML = '<h3>${name}</h3><p>${position}</p>'; //Employee name header, employee position

        card.addEventListener("click", () => {console.log('Clicked ${card.id} - ${name}')}); //Task 4 addition

    deleteBtn.addEventListener("click", (event) => { //Task 4 addition
        employeeContainer.removeChild(card)
        event.stopPropagation();

    });
};

//Test cases for task 2 
createElement("Coby White", "Point Guard"); 
createElement("Matas Buzelis", "Power Forward");
createElement("Josh Giddey", "Shooting Guard");

// Task 3 - Converting NodeLists to Arrays for Bulk Updates

const employeeCardNodeList = document.querySelectorAll(".employeeCard"); //Select elements with employee card class
const employeeCardArry = Array.from(employeeCardNodeList); //Convert into an array

employeeCardArray.forEach(card => {
    card.style.backgroundColor = "red"; //Change background color
});

//Task 5 - Inline Editing of Employee Details

editBtn = document.createElement("button"); //Create edit information button
editBtn.textContent = "Edit information"; //Add text

editBtn.addEventListener("click", (event) => { 
    svBtn = document.createElement("button"); //Creating a save button
    svBtn.textContent = "Save information"; //Add text
    card.replaceChild(svBtn, card.children[2]); //Save button
    card.children[1].outerHTML += `<input value="${name}"><input value="${position}">`;
    
    svBtn.addEventListener("click", (event) => { 
        card.children[0].textContent = card.children[2].value 
        card.children[1].textContent = card.children[3].value 
        event.stopPropagation();
});
event.stopPropagation();
});

card.appendChild(editBtn);
card.appendChild(deleteBtn); 

employeeContainer.appendChild(card); 
    
cnt += 1; //Update counter by 1
