

function number(button){
    
    display.value += button
}


function clearr(button){
    
    display.value = ""
}


function dele(button){
    
    display.value = display.value.slice(0,-1)
}

var display = document.getElementById("dis")

var balance = 55000
var pin = 1234
var signed = false

function sub() {

    if(display.value == pin) {
        signed = true
        display.value = "correct pin"
       
    }
    else if(display.value == "") {
      
        display.value = "pin required"
       
    }
    
    else {
       display.value = "incorrect pin!"
        
    }
}

function  depositt() {

    if(signed){ 

        if(isNaN(display.value) || display.value <= 0){
            display.value = "Please enter valid amount"
         }
        
       else{ dis = Number(display.value)
    var totalplus = balance + dis
    balance = totalplus
    display.value = "Deposit succesfully now total balance is $" + totalplus
}
    
    }
    else{
         display.value = "pin required"
    }
   
}

function  withdraww() {
   
    if(signed){
        if(isNaN(display.value) || display.value <= 0){
        display.value = "Please enter valid amount"
     }
       else{
        var plus = Number(display.value)
        var total = balance - plus
        balance = total
    display.value = "Withdraw succesfully now total balance is $" + total
   
       } 

     
    }
   
    else{
        display.value = "pin required"
   }
   
}

function  bala() {
if(signed){
    display.value = "Your corrent balance is $" + balance
}
else{
    display.value = "pin required"
}
}
    

