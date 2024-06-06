let check = [...document.querySelectorAll('input')];
let btn = document.querySelector('button');
let orderID = document.querySelector('span');
let foods = document.querySelector(".foods");

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    let foodItem = [];
    //* When no checkbox was checked.
    check.forEach((checkbox) => {
        if(checkbox.checked){
           foodItem.push(checkbox.value);
        }
    });
    if(foodItem.length == 0){
        alert("Please select a food item to order");
        return;
    }
    if(foodItem.length >= 2){
        alert("You can select only one item at a time");
        return;
    }
    //! >>>>>> Promise part <<<<<<<
    btn.disabled = true;
    let myPromise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve();
        }, Math.floor(Math.random() * 3000) + 1000);
    });
    myPromise.then(() => {
        orderID.innerText = Math.floor(Math.random() * 1000);
        foodItem.forEach((orderdItem) => {
            switch(orderdItem){
                case "burger" : 
                foods.src = "https://www.safefood.net/getmedia/d81f679f-a5bc-4a16-a592-248d3b1dc803/burger_1.jpg?width=1280&height=720&ext=.jpg";
                break;
                case "fries" : 
                foods.src = "https://www.recipetineats.com/wp-content/uploads/2022/09/Fries-with-rosemary-salt_1.jpg";
                break;
                case "drinks" : 
                foods.src = "https://as2.ftcdn.net/v2/jpg/02/25/30/31/1000_F_225303115_kLBQppB2z3PmQYXzpaqmnUm2VVrxcuyD.jpg"
                break;
                case "combo" :
                foods.src = "https://media.istockphoto.com/id/533712416/photo/cheeseburger-with-drink-of-cola-and-french-fries-red-spotlight.jpg?s=612x612&w=0&k=20&c=L5CCSzIVNwMVocrdqeYhuJtEJhBQy_krZ9v29KNMaAQ="
                break;
            }
            foods.style.display = "inline-block";
            btn.disabled = false;
        });
    });
});