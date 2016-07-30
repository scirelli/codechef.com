/*
Chef belongs to a very rich family which owns many gold mines. Today, he brought N gold coins and decided to form a triangle using these coins. Isn't it strange?

Chef has a unusual way of forming a triangle using gold coins, which is described as follows:

He puts 1 coin in the 1st row.
then puts 2 coins in the 2nd row.
then puts 3 coins in the 3rd row.
and so on as shown in the given figure.

Chef is interested in forming a triangle with maximum possible height using at most N coins. Can you tell him the maximum possible height of the triangle?

H = height
C = coins
H   |   C                             *
-----------                          * *
1   |   1                           * * *
2   |   3                          * * * *
3   |   6                         * * * * *
4   |   10                       * * * * * *
5   |   15
6   |   21


C2 = C1 + H2
C3 = C2 + H3  = C3 = 1 + H2 + H3
C4 = C3 + H4  = 1 + H2 + H3 + H4  //Looks like a summation

n(n+1)
------ = x    // Equation for sumation. x will be the number of coins
   2


n^2 + n
-------  = x
   2

n^2 + n = 2x

n^2 + n - 2x = 0     //Turn it into a quadratic

-b +- sqrt(b^2 -4ac)
--------------------   //Quadratic equation
         2a

a=1, b=1, c=-2x

-1 +- sqrt(1 -4(-2x))
---------------------
        2a

-1 +- sqrt(1 + 8x)
-------------------    //Solution
        2

-1 +- 9
--------
   2

-1 + 9
------- = 4
   2

-1 + sqrt(1 + 8x)
-----------------   //Solution ignore the - side.
       2
*/

function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc('3');
    
    fnc('3');
    fnc('5');
    fnc('7');

    return 0;
}}}}};
var process = {stdin:'', stdout:'' };
//============================================================================================

var readline = require("readline");
var reader = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    }),
    nInputLine = 0,
    nTestCases = 0,
    coinCount = 0;

reader.on( "line", function(data) {
"use strict";
    
    nInputLine++;
    
    if( nInputLine === 1 ) {
        data = parseInt(data.replace(' ', ''));
        nTestCases = parseInt(data);
    }else{
        data = parseInt(data.replace(' ', ''));
        coinCount = parseInt(data);

        console.log(Math.floor(calc(coinCount)));
        nTestCases--;
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

function calc(x){
    return (-1 + Math.sqrt(1 + (8*x)))/2;
}
