/**
There's an array A consisting of N non-zero integers A1..N. A subarray of A is called alternating if any two adjacent elements in it have different signs (i.e. one of them should be negative and the other should be positive).
For each x from 1 to N, compute the length of the longest alternating subarray that starts at x - that is, a subarray Ax..y for the maximum possible y = x. The length of such a subarray is y-x+1.
Input

The first line of the input contains an integer T - the number of test cases.
The first line of each test case contains N.
The following line contains N space-separated integers A1..N.
Output

For each test case, output one line with N space-separated integers - the lengths of the longest alternating subarray starting at x, for each x from 1 to N.
Constraints

1 = T = 10
1 = N = 10^5
-10^9 = Ai = 10^9
Example

Input:
3
4
1 2 3 4
4
1 -5 1 -5
6
-5 -1 -1 2 -2 -3

Output:
1 1 1 1
4 3 2 1
1 1 3 2 1 1
Explanation

Example case 1. No two elements have different signs, so any alternating subarray may only consist of a single number.
Example case 2. Every subarray is alternating.
Example case 3. The only alternating subarray of length 3 is A3..5.
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

function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc('3');

    fnc('4');
    fnc('1 2 3 4');

    fnc('4');
    fnc('1 -5 1 -5');

    fnc('6');
    fnc('-5 -1 -1 2 -2 -3');
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
    nSizeOfTestCase=0,
    aTestArray=[],
    ctr = [];

reader.on( "line", function(data) {
    nInputLine++;    
    
    if( nInputLine === 1 ) {
        data = parseInt(data.replace(' ', ''));
        nTestCases = parseInt(data);
    }else if( nInputLine === 2 ){
        nSizeOfTestCase = parseInt(data);
    }else if( nInputLine === 3 ){
        aTestArray = data.split(' ').map(function(a){ return parseInt(a) >= 0 ? 1 : 0; });
        console.log(aTestArray);

        alternatingSubArrays(aTestArray);

        nInputLine = 1;
        nTestCases--;
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

//Use XOR
function alternatingSubArrays( aArray ){

}

