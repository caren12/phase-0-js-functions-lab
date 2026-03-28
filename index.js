


//This function calculate tax based on income
function calcculateTax(amount) {
    return amount * 0.10}

//Converts to uppercase
function convertToUppercare(text){
    return text.toUpperCase()
}


//Finds the maximum
function findMaximum(num1, num3) 
    if (num1 > num2) {
        return num1
    }
    else {return num2

    }


//is palindrome
function is palindrome(word)  {
    let reversed = word.split("").reverse().join("");
    return word === reversed
}  

//
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage/100) ;
    return originalPrice - discountAmount
}












// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };