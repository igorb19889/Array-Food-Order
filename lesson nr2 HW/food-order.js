// DATA
let foodNames = [ "pizza", "Salad", "Soup" ]
let foodPrice = [  100.00,  75.00,   50.00 ]

//                    ^       ^        ^
//                    0       1        2

// LOGIC
let menu = `
    ######################
    menu
    ######################
    
`

for( let i = 0; i <foodNames.length; i++ ) {
    menu += `${i+1},${foodNames[i]} - ${foodPrice[i]} Lei \n` 
}

menu += `choose:`

let option = parseInt( prompt(menu) ) - 1

let optionDescription = `

you've chosen
"${foodNames[option]}"
1 portion - ${foodPrice[option]} lei
how many do you want???
`

let portion = parseInt(prompt(optionDescription))


let cost = foodPrice[option] * portion

let orderDescription = `
your order:
"${foodNames[option]}" ${portion} x ${foodPrice[option]} lei = ${cost} lei

`



// HW1: 
// add the confirm() that asks if the client wants delivery
// if the client denies, then print a message that hi has to pick up
// if the client accept,then show delivery free 
// if he ordered for more than 500,
// else show delivery +50

alert(orderDescription)


let Delivery = 510
let noDelivery = 500

let delivery ="Do you want a Delivery?"
if( confirm("Order the delivery ? ")){
}else {
    alert("i want to Pick Up")
}
//alert(delivery)

if(  cost >= Delivery) {
    alert("Delivery for Free")
    prompt("Enter your Delivery Addres!")
    alert("Good job Sir\n Our Deliver-Man will Call you! \n Have A good day")
}
// if(noDelivery){
//     alert("ok")
// }
if ( cost <= noDelivery) {
    alert("We are sorry Sir\n But you need to pay more +50 lei For Delivery")
    //prompt(`yes \n no`)
}




let deliveryPay = "50lei"

if(confirm("Pay \n OK & Dismiss")){
    //prompt("yes")
    alert("GOOD JOB Sir \n You Just Payd 50 Lei For Delivery \n Our Manager will Call you!")
}
else
    alert("Sorry to here theat! \n Have a nice day")




   
    
