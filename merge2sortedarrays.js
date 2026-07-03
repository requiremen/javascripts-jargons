let a =[1,2,3];
let b = [4,5,6];
let c = [];
let i = 0;
let j = 0;
while(i<a.length && j<b.length){
    if(a[i]<b[j]){
        c.push(a[i]);
        i++;
    }else{
        c.push(b[j]);
        j++;
    }
}
while(i<a.length){
    c.push(a[i])
    i++;
}
while(j<b.length){
    c.push(b[j]);
    j++
}
console.log(c);
