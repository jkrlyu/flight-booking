const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.checkValidity()) {
            alert("Your booking has been confirmed!");
        }
    });
}
 
function searchflight() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

 
    if (from && to) {
        window.location.href = "bokking.html";
    } else {
        alert("Please enter departure and destination");
    }
}
