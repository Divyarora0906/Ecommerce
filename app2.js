const button = document.querySelectorAll(".cart");
let count = 0;
var cart = document.getElementById("cart");
let cartprice = [];


function truncateProductName(productName, maxLength) {
    if (productName.length > maxLength) {
        // If the product name is longer than the specified maxLength, truncate it
        return productName.substring(0, maxLength) + '...';
    } else {
        // If the product name is within the maxLength limit, return it as is
        return productName;
    }
}
function calculateCartTotal() {
    const totalCost = cartprice.reduce((acc, price) => acc + price, 0);
    return totalCost;
}
function updateTotalCostInUI() {
    const totalCost = calculateCartTotal();
    const totalCostElement = document.getElementsByClassName("bill")[0];
    totalCostElement.innerHTML = "Total Cost: $" + totalCost.toFixed(2);
    console.log(totalCostElement);
}
button.forEach((btn)=>{

    btn.addEventListener("click" , function(){
        btn.classList.add("cart-changed")
        btn.innerHTML = "Added"
        btn.style.backgroundColor = "green"
        if(btn.innerHTML =="Added"){
            btn.style.pointerEvents = "all"
        }
        else{
            btn.style.pointerEvents = "all"
        }
    } )
    btn.addEventListener("click" , addtocart)
})

function removeItemFromCart(itemName) {
    const itemIndex = cartprice.indexOf(itemName);
    if (itemIndex !== -1) {
        cartprice.splice(itemIndex, 1);
    }
    updateTotalCostInUI();
}


function addtocart(event){
let pro = event.target.parentElement.parentElement.parentElement;
console.log(pro)
let pronames = pro.querySelector(".head-card").innerHTML;
let proname = truncateProductName(pronames,10);

let img = pro.querySelector("img");

let price = pro.querySelector(".r-price").innerHTML;
console.log(price);

let numericPrice = parseFloat(price.replace('price:', ''));
cartprice.push(numericPrice);
console.log(cartprice)
let buttonss = pro.querySelector(".cart");
console.log(buttonss)

var div = document.createElement("div");
div.innerHTML = `
<div class="cart-head">Cart</div>
    <div class="all-items">
        <div class="item1">
            <img src="${img.src}" alt="">
            <div class="iname">
                <h2>${proname}</h2>
                <h4>${price}</h4>
            </div>
        </div>
    </div>
`
const cv = document.getElementsByClassName("carts")[0];
// console.log(cv)
cv.appendChild(div);




div.addEventListener('click' , function(){
   div.remove();
   removeItemFromCart(numericPrice);
    --count;
    cart.innerHTML = count;
   buttonss.innerText = "Add to Cart"
   buttonss.style.backgroundColor = "Crimson"
   

}
)
updateTotalCostInUI();  
count++;
cart.innerHTML = count;

}



const cartclick = document.getElementById("cart");
console.log(cartclick);

cartclick.addEventListener('click'  , function(){
   const lo = document.getElementsByClassName("carts")[0];
   lo.classList.toggle("cart-change")
})



async function products(){
    let response = await fetch('https://fakestoreapi.com/products')
   let results = await response.json();
//    console.log(results)
   for(let i =0; i<21; i++){
    let titles = truncateProductName((results[i].title),30);
    let priceapi = (results[i].price);
    let image = (results[i].image);
    let category = (results[i].category );
    let element = document.createElement("div");
    element.innerHTML = `
    <div class=" card-1 cards-co card-ex">
    <div class="image">
        <img src="${image}" alt="" class=" img-ex">
        <div class="offers">15% off on ${category}</div>
        <div class="des">
            <div class="head-card hide"> ${titles}</div>
            <span class="r-price">
               price: ${priceapi}
            </span>
            <span class="n-price">
                $250
            </span>
            <div class="btn-cart ">
                <button class="cart" >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>

    
</div>
    `
    let btns = document.querySelectorAll(".cart");
    console.log(btns);
    btns.forEach((btn)=>{

        btn.addEventListener("click" , function(){
            btn.classList.add("cart-changed")
            btn.innerHTML = "Added"
            btn.style.backgroundColor = "green"
           
        } )
        btn.addEventListener("click" , addtocart)
    })
     


    let appendto = document.getElementsByClassName("products-fake")[0];
    // console.log(appendto)
    appendto.appendChild(element)
   }
 }
 products();

 


 