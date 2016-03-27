var string = '48',
    ptr=0;

function gc(){
   return string.charCodeAt(ptr++);
}
var c = gc(), x=0;

for(;c>47 && c<58;c = gc()){
    x = (x<<1) + (x<<3) + c - 48; //x<<1 + x<<3 same as multiplying x*10
}

console.log(x);

