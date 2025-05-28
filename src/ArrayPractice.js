//for HTML load
const todoArray = [];
document.querySelector("#submitButton").addEventListener("click", submitClicked);
//



function submitClicked(e){
    let elementList = '';
    let inputBox = document.querySelector("#textInput");
    const datePicker = document.querySelector("#datePicker");

    if(inputBox.value){
        todoArray.push(
            {name: inputBox.value,
             date: datePicker.value
            });
    }

    for(let i=0; i<todoArray.length; i++){
        elementList +=
            `
            <p>${todoArray[i].name} &nbsp; ${todoArray[i].date}
                
                <button onclick=" todoArray.splice(${i}, 1)">Delete</button>
                
            </p>
            `;
    }
    document.querySelector("#todoList").innerHTML = elementList;
    inputBox.value = ''; //clear the textbox
    datePicker.value = ''; //clear the date selected
    console.log(e);
    console.log("submit button clicked");
}