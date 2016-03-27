/*
Sergey has made N measurements. Now, he wants to know the average value of the measurements made.
In order to make the average value a better representative of the measurements, before calculating the average, he wants first to remove the highest K and the lowest K measurements. After that, he will calculate the average value among the remaining N - 2K measurements.
Could you help Sergey to find the average value he will get after these manipulations?
Input

The first line of the input contains an integer T denoting the number of test cases. The description of T test cases follows.
The first line of each test case contains two space-separated integers N and K denoting the number of measurements and the number of the greatest and the lowest values that will be removed.
The second line contains N space-separated integers A1, A2, ..., AN denoting the measurements.
Output

For each test case, output a single line containing the average value after removing K lowest and K greatest measurements.
Your answer will be considered correct, in case it has absolute or relative error, not exceeding 10-6.
Constraints

1 ≤ T ≤ 100
1 ≤ N ≤ 104
0 ≤ 2K < N
-106 ≤ Ai ≤ 106
Subtasks

Subtask #1 (50 points): K = 0
Subtask #2 (50 points): no additional constraints
Example

Input:
3
5 1
2 9 -10 25 1
5 0
2 9 -10 25 1
3 1
1 1 1

Output:
4.000000
5.400000
1.000000
Explanation

Example case 1. After removing 1 greatest and 1 lowest measurement, we get the set {2, 9, 1}. The average value in this set is (2+9+1)/3=4.
Example case 2. The average value in the set {2, 9, -10, 25, 1} is (2+9-10+25+1)/5=5.4.
Example case 3. After removing the 1 largest and smallest measurements, Sergey will be left with only one measurement, i.e. 1. Average of this is 1 itself.
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

    fnc('5 1');
    fnc('2 9 -10 25 1');

    fnc('5 0');
    fnc('2 9 -10 25 1');
    
    fnc('3 1');
    fnc('1 1 1');

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
    nRemoveCount = 0,
    aTestArray=[]

reader.on( "line", function(data) {
    nInputLine++;    
    
    if( nInputLine === 1 ) {
        data = parseInt(data.trim());
        nTestCases = parseInt(data);
    }else if( nInputLine === 2 ){
        data = data.split(' ');
        nSizeOfTestCase = parseInt(data[0]);
        nRemoveCount = parseInt(data[1]);
    }else if( nInputLine === 3 ){
        aTestArray = data.split(' ').map(Number);
        
        simpleStat(aTestArray,nRemoveCount);
        
        nInputLine = 1;
        nTestCases--;
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

function simpleStat(aTestArray, nRemoveCount ){
    var sorted = aTestArray.slice(0).sort(function(a,b){return a-b;}),
        sum = 0;

    for( var i=0, l=aTestArray.length-1; i<nRemoveCount; i++ ){
        aTestArray[aTestArray.indexOf(sorted[i])] = 0;
        aTestArray[aTestArray.indexOf(sorted[l-i])] = 0;
    }

    for( var i=0, l=aTestArray.length; i<l; i++ ){
        sum += aTestArray[i];
    }
    if( sum ){
        sum /= aTestArray.length - (2*nRemoveCount);
    }
    console.log(sum);
}
