//for html
document.querySelector('#orderSubtotalInput').addEventListener("keydown", checkInput);
//

function sub() {

    const ytButton = document.querySelector('#ytSubButton');
    ytButton.addEventListener('click', () => {
        ytButton.innerHTML = (ytButton.innerHTML === "Subscribed")
            ? ytButton.innerHTML = 'Subscribe' : ytButton.innerHTML = 'Subscribed';
    })
}


function checkInput(e){
    if (e.key ==="Enter"){
        console.log(e.key);
        calculateTotal()
    }else{
        console.log(e.key);
    }

}
function calculateTotal(){
    const subtotal = document.querySelector('#orderSubtotalInput');
    let realTotal = document.querySelector('#realTotalHeading');

    //if the heading was not found, create one
    if (!(realTotal)) {
        realTotal = document.createElement('h1');
        realTotal.setAttribute("id", "realTotalHeading");
        document.querySelector('label').appendChild(realTotal);
    }



    let cost = Number(subtotal.value);

        if (cost < 0) {
            alert("invalid input!!");
        }
        subtotal.value = ""; //clear the input


        if (cost >= 40) {
            realTotal.innerHTML = "Total = $ " + cost;
        } else {
            realTotal.innerHTML = "Total = $ " + (cost + 10);
        }



}