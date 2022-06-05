///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, elem) => {
  return elem.price + acc;
}, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  const cartTotalTax = cartTotal * tax;
  const subTotal = cartTotal + cartTotalTax;
  return subTotal - couponValue;
};

console.log(calcFinalPrice(10.0, 1, 0.01));
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

Customer ID: Would accept a string for customer's unique account identifier
Customer Since: Would accept a number whose value will be used to assess eligibility for tenure-related customer discounts
Age: Will accept a number referencing customer age, and would both reject orders containing alcohol for users under 21 and prohibit adults from odering off of the kids menu.
Allergies: Will accept a string for any noted allergies, and would reject orders with ingredients matching any listed allergies


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  custID: "Trent872296",
  customerSince: 2015,
  age: 27,
  allergies: "none",
};
