// 


let subBtn = document.querySelector(".btn");

subBtn.addEventListener('click', function(){
    generatePassword();
});


function generatePassword(){
    let char = "123$#@%$*&)(?/!^+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz45098654321";
    let charLength = char.length;

    let password = "";

    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    if(check1.checked == true){
        capitalOnly();
    }else if(check2.checked == true){
       lowerOnly();
    }else if(check3.checked == true){
      numbersOnly();
    }else if(check4.checked == true){
        symbolsOnly()
    }
    else{
    
    for(let i = 0; i<10;i++){
        let sV = Math.floor(Math.random()*charLength);
        password += char.substring(sV, sV+1);
    };
    document.getElementById("password").value = password; }
}

function capitalOnly(){
    let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let capitalLetterLength = capitalLetter.length;
    let password = "";
    for(let i = 0;i< 10; i++){
        let sV = Math.floor(Math.random()*capitalLetterLength);
        password += capitalLetter.substring(sV, sV+1);
    }
    document.getElementById("password").value = password;
};

function lowerOnly(){
    let lowerLetter = "abcdefghijklmnopqrstuvwxyz"
    let lowerLetterLength = lowerLetter.length;
    let password = "";
    for(let i = 0;i< 10; i++){
        let sV = Math.floor(Math.random()*lowerLetterLength);
        password += lowerLetter.substring(sV, sV+1);
    }
    document.getElementById("password").value = password;
};

function numbersOnly(){
    let numbers = "0123456789"
    let numbersLength = numbers.length;
    let password = "";
    for(let i = 0;i< 10; i++){
        let sV = Math.floor(Math.random()*numbersLength);
        password += numbers.substring(sV, sV+1);
    }
    document.getElementById("password").value = password;
};

function symbolsOnly(){
    let symbols = "~!@#$%^&*()_+|:;><?/"
    let symbolsLength = symbols.length;
    let password = "";
    for(let i = 0;i< 10; i++){
        let sV = Math.floor(Math.random()*symbolsLength);
        password += symbols.substring(sV, sV+1);
    }
    document.getElementById("password").value = password;
};



