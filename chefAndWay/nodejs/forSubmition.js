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

function pathDepthFirst( aStreets, k, rootIndex, aCurrentPath, nProduct, oMinProduct ){
    var aLocal = [],
        nOriginalProdoct = nProduct;

    if(rootIndex+1 >= aStreets.length){
      aCurrentPath.push( aStreets[rootIndex] );
      nProduct = (nProduct*aStreets[rootIndex])%MODULO;
      if( nProduct < oMinProduct.nMinProduct ) oMinProduct.nMinProduct = nProduct;
      aCurrentPath.pop();
      nProduct = nProduct;
      return;  
    } 

    for( var i=1, l=aStreets.length,distance=0,nextIndex=0; (rootIndex+i) < l; i++ ){
        nextIndex = rootIndex + i;

        distance = Math.abs(aStreets[rootIndex] - aStreets[nextIndex]);

        if( distance >= 1 && distance <= k ){
           aCurrentPath.push(aStreets[rootIndex]);
           nOriginalProdoct = nProduct;
           nProduct *= (aStreets[rootIndex]%MODULO);
           pathDepthFirst( aStreets, k, nextIndex, aCurrentPath, nProduct, oMinProduct );
           aCurrentPath.pop();
           nProduct = nOriginalProdoct;
        }
    }

    return;
}
    
function path( aStreets, k ){
    var oMinProduct = { nMinProduct:Number.POSITIVE_INFINITY };

    pathDepthFirst( aStreets, k, 0, [], 1, oMinProduct );
    
    return oMinProduct.nMinProduct;
}

reader.on("line", function(data){

    data = data.replace(/\s+/g, ' ').replace('.','');// ensure there is single spaces between input

    if( linesRead%2 === 0 ){
        data = data.split(' ');
        numberOfStreets = parseInt(data[0]);
        k = parseInt(data[1]);
    }else if( linesRead%2 === 1 ){
        streets = data.split(' ');
        for(var i=0; i<streets.length; i++){
            streets[i] = parseInt(streets[i]);
        }
        
        console.log(path( streets, k ));
    }
    linesRead++;
});
