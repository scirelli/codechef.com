'use strict';
/**
* Given an array A1, A2, ..., AN, count the number of subarrays of array A which are non-decreasing.
* A subarray A[i,j], where 1 <= i <= N is a sequence of integers Aj, Aj+1, ..., Aj
* A subarray A[i,j] is non-decreasing if Ai <= Ai+1 <= ... <= Aj. You have to count the total number of such arrays.
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
*    Note that singleton subarrays are identically non-decreasing
*
*  Only single subarray A[1, 1] is non-decreasing.
*/
function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc('2');

    fnc('4');
    fnc('1 4 2 3');

    fnc('1');
    fnc('5');
/*
    fnc('4');
    fnc('1 4 2 3');
 
    fnc('1');
    fnc('5');

    fnc('1');
    fnc('5');
*/
}}}}}; 

var readline = require("readline");
var reader = readline.createInterface({}),
    nInputLine = 0,
    nTestCases = 0,
    nArraySize  = 0;

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
            nTestCases--;
            data = data.replace(/s+/,' ').split(' ').map(Number);
            console.log(data);
            console.log(countSubArrays(data));
        }
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

//'1 4 2 3'
//[1] ,  [1,4],  [4]  ,   [2]  ,   [2,3],  [3]
function countSubArrays( aArray ){
    var nSubArrays = 1,
        nSubs=1;

    for( var i=0, l=aArray.length,num,tmp,next; i<l; i++){
        num = aArray[i];
        next = aArray[i+1];

        if( num <= next ){
            nSubs++;
        }else{
            nSubArrays += nSubs;
            nSubs=1;
        }
    }
    
    return nSubArrays;
};
