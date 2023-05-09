//Step 1-- set event listener:
document.querySelector('button').addEventListener('click',getDrink)

//step 2-- make our function getDrink()
function getDrink(){
let drink = document.querySelector('input').value

//step 3-- feed it into our fetch
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(res => res.json()) // parse the reply into json
.then(data => {
    console.log(data.drinks[0])//put the data into console log for debug
    //put image from data.drinks[0].strDrink to img
    document.querySelector('#drinkimg').src = data.drinks[0].strDrinkThumb
    //put name into h2
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    //put instructions
    document.querySelector('#instructions').innerText = data.drinks[0].strInstructions
})
//error collection
.catch(err => {
    console.log(`error ${err}`)
});}

//Enter --> Click button
let input = document.querySelector('input');
input.addEventListener('keypress',function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.querySelector('button').click();
    }
});