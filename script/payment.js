function fnReset(){
    alert('Form reset!');
};

function fnValidate(){
  if(!validateName()){
      return;
  }
  else if(!validateEmail()){
      return;
  }
  else if(!validateCity()){
      return;
  }
  else if(!validateAddress()){
      return;
  }
  else if (!validateBeverage()){
      return;
  }
  else if (!validateDesserts()){
      return;
  }
  else if(!validatePayment()){
      return;
  }
  else if(!validateAgree()){
      return;
  }
  alert("Payment Success!");
  window.location.href = "./index.html";
};

function validateName(){
    var pName = document.getElementById('form_name').value;
    var errorMsg = document.getElementById('error-name');
    if(pName == ''){
        errorMsg.innerHTML = 'Name must be filled!';
        return false;
    }
    else if(!isAlpha(pName)){
        errorMsg.innerHTML = 'Name must be alphabet only!';
        return false;
    }
    errorMsg.innerHTML = '';
    return true;
}


function validateEmail(){
    var pEmail = document.getElementById('form_email').value;
    var errorMsg = document.getElementById('error-email');
    var check = 0;
    if(pEmail ==''){
        errorMsg.innerHTML = 'Email must be filled!';
        return false;
    }
    for (var i=0;i<pEmail.length;i++){
        if(pEmail.charAt(i) == '@'){
            check = 1;
        }
    }
    if(check == 1){
        errorMsg.innerHTML = '';
        return true;
    }
    else if (check == 0){
        errorMsg.innerHTML = 'Email must be valid';
        return false;
    }
}

function validateCity(){
    var pCity = document.getElementById('form_city').value;
    var errorMsg = document.getElementById('error-city');
    if(pCity == ''){
        errorMsg.innerHTML ='City must be filled!';
        return false;
    }
    else{
        errorMsg.innerHTML = '';
        return true;
    } 
}

function validateAddress(){
    var pAddress = document.getElementById('form_address').value;
    var errorMsg = document.getElementById('error-address');
    if(pAddress == ''){
        errorMsg.innerHTML = 'Address must be filled!';
        return false;
    }
    else if(pAddress.split(' ').length < 4){
        errorMsg.innerHTML = 'Address must be more than 4 words!';
        return false;
    }
    else {
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateBeverage(){
    var pBeverage = document.getElementById('form_beverages').value;
    var errorMsg = document.getElementById('error-amount-beverages');
    if(pBeverage != 'none'){
        var pAmount = document.getElementById('amount-beverages').value;
        if(pAmount == ''){
            errorMsg.innerHTML = 'Amount must be filled!';
            return false;
        }
        else if(isAlpha(pAmount)){
            errorMsg.innerHTML = 'Amount must be number!';
            return false;
        }
        else{
            errorMsg.innerHTML = '';
            return true;
        }
    }
    errorMsg.innerHTML = '';
    return true;
}

function validateDesserts(){
    var pDessert = document.getElementById('form_desserts').value;
    var errorMsg = document.getElementById('error-amount-desserts');
    if (pDessert != 'none'){
        var pAmount = document.getElementById('amount-desserts').value;
        if (pAmount == ''){
            errorMsg.innerHTML = 'Amount must be filled!';
            return false;
        }
        else if(isAlpha(pAmount)){
            errorMsg.innerHTML = 'Amount must be number!';
            return false;
        }
        else {
            errorMsg.innerHTML = '';
            return true;
        }
    }
    errorMsg.innerHTML = '';
    return true;
}

$(".visa").hide();

$("#form_method_visa").click(function(){
    $(".visa").fadeIn();
})

$("#form_method_paypal").click(function(){
    $(".visa").fadeOut();
})

function validatePayment(){
    var pVisa = document.getElementById('form_method_visa').checked;
    var pPay = document.getElementById('form_method_paypal').checked;
    var errorMsg = document.getElementById('error-radio');
    if(!pVisa && !pPay){
        errorMsg.innerHTML = 'Payment Method must be chosen!';
        return false;
    }
    else if(pVisa){
        if(!validateNumber()){
            return false;
        }
        else if(!validateValidity()){
            return false;
        }
        else if(!validateCvv()){
            return false;
        }
        else{
            errorMsg.innerHTML ='';
            return true;
        }
    }
    else{
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateNumber(){
    var pCard = document.getElementById('visa_card').value;
    var errorMsg = document.getElementById('error-card');
    if(pCard == ''){
        errorMsg.innerHTML = 'Card number must be filled!';
    }
    else if(isAlpha(pCard)){
            errorMsg.innerHTML = 'Card number must be numeric!';
            return false;
        }
    else{
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateValidity(){
    var pValidity = document.getElementById('visa_validity').value;
    var errorMsg = document.getElementById('error-validity');
    if(pValidity == ''){
        errorMsg.innerHTML = 'Validity must be filled!';
    }
    else if(isAlpha(pValidity)){
            errorMsg.innerHTML = 'Validity must be numeric!(MM/YY)';
            return false;
    }
    else{
        errorMsg.innerHTML = '';
        return true;
    }
}

function validateCvv(){
    var pCvv = document.getElementById('visa_cvv').value;
    var errorMsg = document.getElementById('error-cvv');
    if(pCvv == ''){
        errorMsg.innerHTML = 'CVV must be filled!';
    }
    else if(isAlpha(pCvv)){
            errorMsg.innerHTML = 'CVV must be numeric!';
            return false;
        }
    else{
            errorMsg.innerHTML = '';
            return true;
        }
}


function validateAgree(){
    var pAgree = document.getElementById('form_agree');
    var errorMsg = document.getElementById('error-agree');
    if (!pAgree.checked){
        errorMsg.innerHTML = 'You must agree with terms and conditions!'
        return false;
    }
    errorMsg.innerHTML = '';
    return true;

}

function isAlpha(pName){
    for(var i = 0; i<pName.length ; i++){
        if(!(pName.charAt(i) >= 'a' && pName.charAt(i)<= 'z') && !(pName.charAt(i) >= 'A' && pName.charAt(i)<= 'Z')){
            if(pName.charAt(i) == ' '){
                continue;
            }
            else return false;
        }
    }
    return true;
}

