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
*    Note that singleton subarrays are identically non-decreasing
*
*  Only single subarray A[1, 1] is non-decreasing.
*/
function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc("4 2");
    fnc("2 8 7 6 15 4 9 18 14 16 10 1 17 5 20 11 19 12 13 3");
}}}}}; 

var readline = require("readline");
var reader = readline.createInterface({});

reader.on( "line", function(data) {
    data = data.replace(/\s+/g, ' ');// ensure there is
                                        // single space between
                                        // each input
    if (inputLine === 0) {
    }
}
