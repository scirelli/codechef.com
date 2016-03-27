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
       
        console.log(flipBalloons(string));

        nInputLine = 1;
        nTestCases--;
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

function flipBalloons(string){
    var countOfAs = 0,
        countOfBs = 0;

    for( var i=0, l=string.length; i<l; i++ ){
        if( string.charAt(i) === 'a' ){
            countOfAs++;
        }
    }
    countOfBs = string.length - countOfAs;
    if( countOfAs >= countOfBs ){
        return countOfBs;
    }else{ 
        return countOfAs;
    }
}
