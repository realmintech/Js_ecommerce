let price1 = "";
let Total= [];
// const sumtotal = [];

let reduceTotal = document.querySelector("#reduceTotal")
let total = document.getElementById('total');
let sum_total = document.getElementsByClassName('sum_total');
let cartProduct = document.getElementById('cartProduct');
let cleared = document.getElementById('cleared');


let all = Total.push(reduceTotal);
console.log(all)


for(let j = 0; j < all.length; j++){
     all.reduce()
}
for (let i = 0; i < localStorage.length; i++) { 
  let myStorage=  JSON.parse(localStorage.getItem(localStorage.key(i)));
    price1 +=`
        <tr>
        <td><h4 id="productName">${(myStorage[0])}</h4></td>
        <td><h4 id="productImg"><img src ="${(myStorage[1])}" width="150px"class="rounded"></h4></td>
        <td>
            <h4 id="productPrice">&#8358;${(myStorage[2]).slice(1)}</h4>
        </td>
        <td>
            <h2>
                <input type="number" value="1" onchange="deduct(this)" onkeyup="deduct(this)" id="input">
            </h2>
        </td>
        <td>
            <h2 id="total" class="sum_total">&#8358;${(myStorage[2]).slice(1)}</h2>
        </td>
        <td> <button class="btn btn-danger" onclick="removeCart(this)">Remove</button></td>
        </tr>
    `
    cartProduct.innerHTML = price1;
}

count.innerHTML = localStorage.length;

function updateCartTotal() {
    let sum = 0;
    for (let i = 0; i < sum_total.length; i++) {
      sum += parseInt(sum_total[i].innerHTML.slice(1));
    }
    total_all.innerHTML = "&#8358;" + sum;
    console.log(reduceTotal)
  }
  
  updateCartTotal();

function deduct(x){
    x.parentNode.parentNode.nextElementSibling.firstElementChild.innerHTML= "&#8358;" +  x.value * parseInt(x.parentNode.parentNode.previousElementSibling.firstElementChild.innerHTML.slice(1));
    updateCartTotal();
}

function removeCart(x) {
    localStorage.removeItem(x.parentNode.parentNode.firstElementChild.firstElementChild.innerHTML);
    x.parentNode.parentNode.remove();
    count.innerHTML = localStorage.length;
    updateCartTotal();
}

function clear_all(){
    localStorage.clear()
    window.location.assign("payment.html");
}

