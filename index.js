function calculateTax(amount) {
    return amount * 0.10;
}

// Converts to uppercase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Finds the maximum
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// Is palindrome
function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    return word === reversed;
}

// Discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage / 100);
    return originalPrice - discountAmount;
}


module.exports = {
    calculateTax,
    convertToUpperCase,
    findMaximum,
    isPalindrome,
    calculateDiscountedPrice
};