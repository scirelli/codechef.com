function fibber() {
    let memo = [];
    return function fib(n){
        if(n === 0 || n === 1){
            return 1;
        }else if(memo[n] === undefined){
            memo[n] = fib(n - 1) + fib(n - 2);
        }
        return memo[n];
    };
}

var fib = fibber(),
    seq = [];

for(let i=0; i<10; i++){
    seq.push(fib(i));
}

console.log(seq.join(', '));
