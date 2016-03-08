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
*/
(function(){
    var input = { 
            numberOfStreets:4,
            k:2,
            aStreets:[1,2,3,4]
        },
        aPaths = [];
    
    function pathDepthFirst( aStreets, k, rootIndex, aPaths ){
        var aLocal = [];

        if(rootIndex+1 >= aStreets.length){
          console.log(aStreets[rootIndex]);
          //printpath here
          return;  
        } 

        for( var i=1, l=aStreets.length, distance=0,nextIndex=0; (rootIndex+i) < l; i++ ){
            nextIndex = rootIndex + i;

            distance = Math.abs(aStreets[rootIndex] - aStreets[nextIndex]);

            if( distance >= 1 && distance <= k ){
               console.log(aStreets[rootIndex]);
               //add to path here
               pathDepthFirst( aStreets, k, nextIndex, aPaths );
               //pop off path here
            }
        }

        return;
    }

    aPaths = pathDepthFirst( input.aStreets, input.k, 0, aPaths);

    console.log(aPaths);
})();

/** Depth first traversal 
                1
            2      3
         3    4       4
      4
 */
