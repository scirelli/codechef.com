var readline = require("readline");
var reader = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});
var MODULO = 1000000007,
    linesRead = 0,
    numberOfStreets = 0,
    k = 0,
    streets = [];

function pathDepthFirst( aStreets, k, rootIndex, nProduct, oMinProduct ){
    var aLocal = [],
        nOriginalProdoct = nProduct;

    if(rootIndex+1 >= aStreets.length){
      nProduct *= aStreets[rootIndex];
      if( nProduct < oMinProduct.nMinProduct ) oMinProduct.nMinProduct = nProduct;
      nProduct = nProduct;
      return;  
    } 

    for( var i=1, l=aStreets.length,distance=0,nextIndex=0; (rootIndex+i) < l; i++ ){
        nextIndex = rootIndex + i;

        distance = aStreets[nextIndex] - aStreets[rootIndex];

        if( distance >= 1 && distance <= k ){
           nOriginalProdoct = nProduct;
           nProduct *= aStreets[rootIndex];
           pathDepthFirst( aStreets, k, nextIndex, nProduct, oMinProduct );
           nProduct = nOriginalProdoct;
        }
    }

    return;
}
    
function path( aStreets, k ){
    var oMinProduct = { nMinProduct:Number.POSITIVE_INFINITY };

    pathDepthFirst( aStreets, k, 0, 1, oMinProduct );
    
    return oMinProduct.nMinProduct%MODULO;
}

reader.on("line", function(data){
    data = data.replace(/\s+/g, ' ').replace('.','');// ensure there is single spaces between input

    if( linesRead%2 === 0 ){
        data = data.split(' ');
        numberOfStreets = parseInt(data[0]);
        k = parseInt(data[1]);
    }else if( linesRead%2 === 1 ){
        streets = data.split(" ").map(Number).slice(0,numberOfStreets);
        console.log(streets); 
        console.log(path( streets, k ));
    }
    linesRead++;
});
