var readline = require("readline");
var reader = readline.createInterface({
        input : process.stdin,
        output : process.stdout
    }),
    nInputLine = 0,
    nTestCases = 0,
    nNumberOfQuestions = 0,
    aCorrectAnswers = [],
    aCorrectAnswers = [],
    aChefsAnswers   = [];
    aWinnings       = [];
    ctr = [];

reader.on( "line", function(data) {
    nInputLine++;    
    
    if( nInputLine === 1 ) {
        data = parseInt(data.replace(' ', ''));
        nTestCases = parseInt(data);
    }else if( nInputLine === 2 ){
        nNumberOfQuestions = parseInt(data);
    }else if( nInputLine === 3 ){
        aCorrectAnswers = data.replace(' ', '').split('');
    }else if( nInputLine === 4 ){
        aChefsAnswers = data.replace(' ', '').split('');
    }else if( nInputLine === 5 ){
        aWinnings = data.replace('  ', '').split(' ').map(Number);
        
        greatestWinnings( nNumberOfQuestions, aCorrectAnswers, aChefsAnswers, aWinnings );

        nInputLine = 1;
        nTestCases--;
    }

    if( nTestCases <= 0){
        nInputLine = 0;
        nTestCases = 0;
    }
});

function greatestWinnings( nNumberOfQuestions, aCorrectAnswers, aChefsAnswers, aWinnings ){
    var nChefsCorrectAnswers = 0,
        currentMaxWinnings = aWinnings[0];
    
    for( var i=0; i<nNumberOfQuestions; i++ ){
        if( aChefsAnswers[i] === aCorrectAnswers[i] ){
            nChefsCorrectAnswers++;
        }
    }
    if( nChefsCorrectAnswers === nNumberOfQuestions ) return console.log(aWinnings.pop());
    if( nChefsCorrectAnswers === 0 ) return console.log(aWinnings[0]);

    for( var i=1; i<=nChefsCorrectAnswers; i++ ){
        if( aWinnings[i] >= currentMaxWinnings ){
            currentMaxWinnings = aWinnings[i];
        }
    }
    console.log(currentMaxWinnings);
}
