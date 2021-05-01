'use strict';
var numbers = new Array();
for (let j = 2, i = 0; j < process.argv.length; j++, i++) {
    numbers[i] = parseInt(process.argv[j]);
}

var result = [];
var len = numbers.length - 1;
for(let i = 0;numbers[i];i++){
    result[i] = findDigits(numbers[i]);
}

function findDigits(num){
    if(num >= 10){
        let phoneticVal = [];
        let value = 0;
        for(let i = 0;num; i++){
        //get remainder
        value = num % 10;
        phoneticVal[i] = findPhonetic(value); 
            
        //get the quotient
        num = (num - value) / 10;
        }
        return phoneticVal.reverse().join('');
    }
    else{
        return findPhonetic(num);
    }
}

function findPhonetic(num){
    switch(num){
        case 0: return 'Zero';
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
        case 6: return 'Six';
        case 7: return 'Seven';
        case 8: return 'Eight';
        case 9: return 'Nine';
    }
}

var result_string = "";
for(let i = 0;result[i];i++){
    result_string += (result[i] + ((i<result.length-1)? "," : ""));
}
console.log(result_string);