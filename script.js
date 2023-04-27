let message = document.getElementById('message')
let count = document.getElementById('count');

let messages_show = "";
function addup(x) {
    let siblings = x.previousElementSibling;
    let productName = x.previousElementSibling.previousElementSibling.innerHTML;
    let img = siblings.previousElementSibling.previousElementSibling.alt;
    localStorage.setItem(productName,JSON.stringify([productName,img,siblings.innerHTML]));
    console.log(localStorage);
    count.innerHTML = localStorage.length;
    document.getElementById("message").style.display = "block";
     setTimeout(function(){
     
       document.getElementById("message").style.display = "none";
     
     }, 3000);
        messages_show = `
        <div class="alert alert-success alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>
            <strong>Success!</strong> You have successfully added the item to your cart.
        </div>
    ` 
    message.innerHTML = messages_show
}
count.innerHTML = localStorage.length;


function change() {
    let all = document.body;
    all.classList.toggle('darkmode') ; 
}

function transfer() {
    window.location.assign('payment.html')
}

