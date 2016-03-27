/*
Little Malvika is very peculiar about colors. On her birthday, her mom wanted to buy balloons for decorating the house. So she asked her about her color preferences. The sophisticated little person that Malvika is, she likes only two colors — amber and brass. Her mom bought n balloons, each of which was either amber or brass in color. You are provided this information in a string s consisting of characters 'a' and 'b' only, where 'a' denotes that the balloon is amber, where 'b' denotes it being brass colored.
When Malvika saw the balloons, she was furious with anger as she wanted all the balloons of the same color. In her anger, she painted some of the balloons with the opposite color (i.e., she painted some amber ones brass and vice versa) to make all balloons appear to be the same color. As she was very angry, it took her a lot of time to do this, but you can probably show her the right way of doing so, thereby teaching her a lesson to remain calm in difficult situations, by finding out the minimum number of balloons needed to be painted in order to make all of them the same color.
Input

The first line of input contains a single integer T, denoting the number of test cases.
The first and only line of each test case contains a string s.
Output

For each test case, output a single line containing an integer — the minimum number of flips required.
Constraints

1 = T = 100
1 = n = 100, where n denotes to the length of the string s.
Example

Input:
3
ab
bb
baaba

Output:
1
0
2
Explanation

In the first example,
you can change amber to brass or brass to amber. In both the cases, both the balloons will have same colors. So, you will need to paint 1 balloon. So the answer is 1.
In the second example,
As the color of all the balloons is already the same, you don't need to paint any of them. So, the answer is 0.
*/
Math.randRange = function( min, max ){
    return ~~(Math.random()*max + min);
};
Array.prototype.shuffle = function(){
    var me = this;

    function swap( i, j ){
        var t = me[i];
        me[i] = me[j];
        me[j] = t;
    }
    for( var i=0; i<this.length; i++ ){
         swap(i, Math.randRange(0,this.length));
    }
    return me;
};
Array.prototype.fill = function(){
    var self = this;
    for( var i=0,l=self.length; i<l; i++ ){
        self[i] = i;
    }
    return self;
};

Array.prototype.fillAlpha = function(){
    var self = this;

    for( var i=0,l=self.length,a=97; i<l; i++ ){
        self[i] = String.fromCharCode((i%26) + a);
    }
    return self;
};

function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc('3');
    
    fnc('ab');

    fnc('bb');

    fnc('baaba');
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
    string = '';

reader.on( "line", function(data) {
"use strict";
    
    nInputLine++;
    
    if( nInputLine === 1 ) {
        data = parseInt(data.replace(' ', ''));
        nTestCases = parseInt(data);
    }else if( nInputLine === 2 ){
        string = data.trim();
       
        flipBalloons(string);

        nInputLine = 1;
        nTestCases--;
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

function flipBalloons(string){
    console.log(string);
}
