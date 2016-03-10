/**
    After visiting a childhood friend, Chef wants to get back to his home. His friend lives at the first street, 
    and Chef himself lives at the N-th (and the last) street. Their city is a bit special: you can move from 
    the X-th street to the Y-th street if and only if 1 <= Y - X <= K, where K is the integer value that is 
    given to you. Chef wants to get to home in such a way that the product of all the visited streets' special 
    numbers is minimal (including the first and the N-th street). Please, help him to find such a product.

    Input
        The first line of input consists of two integer numbers - N and K - the number of streets and the value 
        of K respectively. The second line consist of N numbers - A1, A2, ..., AN respectively, where Ai equals 
        to the special number of the i-th street.

    Output
        Please output the value of the minimal possible product, modulo 1000000007.

    Constraints
        1 <= N <= 10^5
        1 <= Ai <= 10^5
        1 <= K <= N

    Example:
        Input:
            4 2
            1 2 3 4.
        
        Output:
            8

        Paths            |  Products
    1 -> 2 -> 3 -> 4     |  1 * 2 * 3 * 4 = 24
         2 -> 3 -> 4     |  2 * 3 * 4     = 24
              3 -> 4     |  3 * 4         = 12
         2 -> 4          |  2 * 4         = 8   <-- Minimal Path
    1 -> 3 -> 4          |  1 * 3 * 4     = 12
         3 -> 4          |  3 * 4         = 12

var readline = require("readline");
var reader = readline.createInterface({
	input : process.stdin,
	output : process.stdout
});
var numOfStreets, windowSize;
var inputLine = 0;
var logStreetWeights = [], trackWeights = [], selectedStreet = 0, currentStreetIndex, CONST_MOD = 1000000007;
reader
		.on(
				"line",
				function(data) {
					data = data.replace(/\s+/g, ' ');// ensure there is
														// single space between
														// each input

*/
(function(){
	function randRange( min, max ){
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
        	 swap(i, randRange(0,this.length));
        }
    };

    var aStreets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        numberOfStreets = aStreets.length,
        k = 2,
        MODULO = 1000000007;

    aStreets.shuffle();
    aStreets = [2, 8, 7, 6, 15, 4, 9, 18, 14, 16, 10, 1, 17, 5, 20, 11, 19, 12, 13, 3];
    console.log(aStreets);

    function pathDepthFirst( aStreets, k, rootIndex, aCurrentPath, aAllPaths, nCurProduct, oMinProduct ){
        var nPrevProduct = 1;

        if(rootIndex+1 >= aStreets.length){
          aCurrentPath.push( rootIndex );
          nPrevProduct = nCurProduct;
          nCurProduct *= aStreets[rootIndex];
          if( nCurProduct < oMinProduct.nMinProduct ) oMinProduct.nMinProduct = nCurProduct;
          aAllPaths.push(aCurrentPath.slice(0));
          console.log( aCurrentPath.map(function(item){return aStreets[item];}).join(',') );
          aCurrentPath.pop();
          nCurProduct = nPrevProduct;
          return;  
        } 

        for( var i=1, l=aStreets.length,distance=0,nextIndex=0; i < l; i++ ){
            nextIndex = i;
            
            if( aCurrentPath.indexOf(nextIndex) !== -1 ) continue;

            distance = aStreets[nextIndex] - aStreets[rootIndex];

            if( distance >= 1 && distance <= k ){
               aCurrentPath.push(rootIndex);
               nPrevProduct = nCurProduct;
               nCurProduct *= aStreets[rootIndex];
               pathDepthFirst( aStreets, k, nextIndex, aCurrentPath, aAllPaths, nCurProduct, oMinProduct );
               aCurrentPath.pop();
               nCurProduct = nPrevProduct;
            }
        }

        return aAllPaths;
    }
    
    function path( aStreets, k ){
        var oMinProduct = { nMinProduct:Number.POSITIVE_INFINITY };

        console.log(pathDepthFirst( aStreets, k, 0, [], [], 1, oMinProduct ));
        
        return oMinProduct.nMinProduct%MODULO;
    }

    console.log(path( aStreets, k ));
})();

/** Depth first traversal 
                1
            2      3
         3    4       4
      4
 */
