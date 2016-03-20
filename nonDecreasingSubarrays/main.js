'use strict';
/**
* Given an array A1, A2, ..., AN, count the number of subarrays of array A which are non-decreasing.
* A subarray A[i,j], where 1 <= i <= N is a sequence of integers Aj, Aj+1, ..., Aj
* A subarray A[i,j] is non-decreasing if Ai <= Ai+1 <= ... <= Aj. 
* You have to count the total number of such arrays.
* 
* Input:
*   The first of input contains an integer T denoting the number of test cases. The description of T test cases follows.
*   The first line of each test casae contains a single integer N denoting the size of array.
*   The second line contains N space-separated integers A1, A2,..., An denoting the elements of the array.
* 
* Output:
*   For each test case, output in single line the required answer.
* 
* Contraints
*   1 <= T <= 5
*   1 <= N <= 10^5
*   1 <= Ai <= 10^9
*
* Subtasks
*   Subtask 1 (20 points): 1 <= N <= 100
*   Subtask 2 (30 points): 1 <= N <= 1000
*   Subtask 3 (50 points): Original constraints
*
* Example:
*   Input:
*    2
*    4
*    1 4 2 3
*    1
*    5
* 
*  Output:
*    6
*    1
*
*  Explanation:
*    Example case 1.
*       All valid subarrays are A[1,1], A[1,2], A[2,2], A[3, 3], A[3, 4], A[4, 4] 
                                  [1] ,  [1,4],  [4]  ,   [2]  ,   [2,3],  [3]
*    
*    Note that singleton subarrays are identically non-decreasing
* 
*    Example case 2
*       Only single subarray A[1, 1] is non-decreasing.
*                               [5]
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
}
function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc('5');

    fnc('4');
    fnc('1 4 2 3');

    fnc('1');
    fnc('5');

    fnc('4');
    fnc('4 3 2 1');
 
    fnc('2');
    fnc('1 4');
    
    var a = new Array(Math.pow(10,5));
    a.fill().shuffle();
    fnc( a.length + '' );
    fnc( a.join(' ') );
}}}}};
var process = {stdin:'', stdout:'' };

var readline = require("readline");
var reader = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    }),
    nInputLine = 0,
    nTestCases = 0,
    nArraySize  = 0,
    ctr = [];

reader.on( "line", function(data) {
    nInputLine++;    
    
    if( nInputLine === 1 ) {
        data = parseInt(data.replace(' ', ''));
        nTestCases = data;
    }else if( nInputLine > 1 ){
        if(nInputLine%2 === 0){
            data = parseInt(data.replace(/ /g, ''));
            nArraySize = data;
        }else if( nInputLine%2 === 1){
            data = data.replace(/s+/,' ').split(' ').map(Number);
            //console.log(data);
            console.log(countSub(data));
            nTestCases--;
        }
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

//'1 4 2 3'
//'4 3 2 1'
//[1] ,  [1,4],  [4]  ,   [2]  ,   [2,3],  [3]
function countSub ( arr ){
   var ctr = 1;

   for( var index=1, l=arr.length, k=1; index<l; index++ ){
        if( arr[index] >= arr[index-1] ){
            ctr += ++k;
        }else{
            k = 1;
            ctr++;
        }
    }

    return ctr;
}
