function firstFunction (input){
    console.log(input)
}

firstFunction("function")
function secondFunction (){
    console.log(1)
}
secondFunction()
firstFunction()





function add (num1, num2)
{
    console.log(num1 + num2) 
}
add(2,6)
function multiply (num1, num2)
{
    console.log(num1 * num2)
}
multiply(4,2)

function divide (num1, num2)
{
    console.log(num1 / num2 )
}
divide(2,8)

function concatenation (input1, input2, input3)
{
    console.log(input1 + " " + input2 + " " + input3)
}
concatenation("hello", "world", "goodbye")

function prints5Bangs5Times (input)
{
    let inputWith5Bangs = input + "!!!!!"
    return inputWith5Bangs;
}
function printsTwice(input){
    console.log(input)
    console.log(input)
}
printsTwice(prints5Bangs5Times("hi"))


function double (num)
{
    return num * 2
}

function triple (num)
{
    return num * 3
}

function multiplyBy6 (number) {
    let answer = triple(double(number))
    console.log(answer)
    return answer
}
console.log(multiplyBy6(10))

function greaterThan10 (num) {
    return num > 10
}
console.log( greaterThan10(5) )
console.log(greaterThan10(50))
console.log(greaterThan10(9))
console.log(greaterThan10(20))

function is10 (num) {
    return num === 10
}
console.log(is10(10))
console.log(is10(9))

function moreThan10AndLessThan100 (num){
    return num > 10 && num < 100
}
console.log(moreThan10AndLessThan100(11))
console.log(moreThan10AndLessThan100(9))
console.log(moreThan10AndLessThan100(1000))

function lessThan50OrMoreThan500 (num){
    return num < 10 || num > 500
}
console.log("lessthan50 " + lessThan50OrMoreThan500(5))
console.log("lessthan50 " + lessThan50OrMoreThan500(50))
console.log("lessthan50 " + lessThan50OrMoreThan500(501))

function isEven(num){
    return num % 2 === 0
}
console.log(isEven(5))


// 1. make a function which returns the remainder when divided by 7
// 2. make a function which checks if a number is divisible by 3
// 3. make a function which logs the remainder of the function from 1. for the following numbers:
//      1,3,6,7,8,9  
// 4. make a function which checks if a number is more than 10, and console.logs out the result 5 times
// 5. make a function which checks if a number is divisble by 10
// 6. make a function which checks if a number is divisble by 6
// 7. make a function which checks if a number is divisble by 10 and 6 using 5. and 6.

function one(num){
    return num % 7 
}
console.log(one(4))

function two(num){
    return num % 3 === 0
}
console.log(two(6))

console.log(one(1))
console.log(one(3))
console.log(one(6))
console.log(one(7))
console.log(one(8))
console.log(one(9))

function morethan10(num){
    return num > 10
}
console.log(morethan10 (5))
console.log(morethan10(12))
console.log(morethan10(15))
console.log(morethan10(4))
console.log(morethan10(20))

function divisibleby10 (num){
    return num % 10 === 0
}
console.log(divisibleby10(30))

function divisbleby6 (num){
    return num % 6 === 0
}
console.log(divisbleby6(2))

function divisbleby10and6 (num){
    return num % 10 && num % 6
}
console.log(divisibleby10(30))
console.log(divisbleby6(2))


function four (num1, num2)
{
    console.log(num1 + num2)
}
four(2,6)

function five (num1, num2)
{
    console.log(num1 * num2)
}
five(7,2)

function six (num1, num2)
{
    console.log(num1 / num2)
}
six(6,3)

function greaterthan500andlessthan1000 (num){
    return num > 500 && num < 1000
}
console.log(greaterthan500andlessthan1000(600))

function greaterthan500orlessthan1000 (num){
    return num > 500 || num < 1000
}
console.log(greaterthan500orlessthan1000(600))