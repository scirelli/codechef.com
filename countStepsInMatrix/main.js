/*
You have a matrix of size N * N with rows numbered through 1 to N from top to bottom and columns through 1 to N from left to right. It contains all values from 1 to N2, i.e. each value from 1 to N2 occurs exactly once in the matrix.

Now, you start from the cell containing value 1, and from there visit the cell with value 2, and then from there visit the cell with value 3, and so on till you have visited cell containing the number N2. In a single step, you can move from a cell to one of its adjacent cells. Two cells are said to be adjacent to each other if they share an edge between them.

Find out minimum number of steps required.

For example, if matrix is

1 3
2 4
You start from cell containing value 1 (i.e. (1,1)) and you want to visit cell with value 2 (i.e. (2,1)). Now, from cell (2,1) you have to visit cell (1,2), which can be done is 2 steps (First we go from (2, 1) to (1, 1) and then to (1, 2), total 2 steps). Finally you move to cell where value 4 is present in 1 step. So, total number of steps required is 4.

Input

The first line of the input contains an integer T denoting the number of test cases. The description of T test cases follows.
The first line of each test case contains a single integer N denoting the size of matrix. Each of the next N lines contain N integers denoting the values in the rows of the matrix.
Output

For each test case, output in a single line the required answer.

*/
function require(){ return { createInterface:function(){ return {on:function(str, fnc){
    fnc('2');
    
    fnc('2');
    fnc('1 3');
    fnc('2 4');

    fnc('3');
    fnc('1 7 9');
    fnc('2 4 8');
    fnc('3 6 5')

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
    nTestCaseLine = 0,
    nTestCaseStartLine = 0,
    nMatrixSize = 0,
    matrix = [];

reader.on( "line", function(data) {
"use strict";
    
    nInputLine++;
    
    if( nInputLine === 1 ) {
        data = parseInt(data.replace(' ', ''));
        nTestCases = parseInt(data);
    }else{
        nTestCaseLine++;

        if( nTestCaseLine === 1 ){
            nMatrixSize = parseInt(data);
            nTestCaseStartLine = nInputLine;
        }else if(nInputLine < (nTestCaseStartLine+nMatrixSize)){
            matrix.push(data.split(' ').map(Number));
        }else if(nInputLine === (nTestCaseStartLine+nMatrixSize)){
            matrix.push(data.split(' ').map(Number));
            countStepsInMatrix(nMatrixSize, matrix);
        }else{
            matrix = [];
            nTestCases--;
            nMatrixSize = parseInt(data);
            nTestCaseStartLine = nInputLine;
            nTestCaseLine = 1;
        }
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

function countStepsInMatrix(nMatrixSize, matrix){
    var tempSpace = new Array(nMatrixSize*nMatrixSize),
        count = 0;

    for(var n=0; n<nMatrixSize; n++){
        for(var m=0; m<nMatrixSize; m++){
            tempSpace[matrix[n][m]] = {n:n+1, m:m+1};
        }
    }
    for(var index=0, l=nMatrixSize*nMatrixSize, a,b; index<l; index++){
        a = tempSpace[index];
        b = tempSpace[index+1];

        if( a && b){
            count += Math.abs(b.n - a.n) + Math.abs(b.m - a.m);
        }
    }
    console.log(count);
}
