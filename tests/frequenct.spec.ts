import {test}from '@playwright/test';
test('repetition',async()=>{
let str = "mississippi";
let frequency :{[key:string]:number}={};

for (let i=0;i<str.length;i++){
    let ch= str[i];
    if(frequency[ch]){
        frequency[ch]++
    }
    else{
        frequency[ch]=1
    }
    
}
let maxCount=0;
let maxchar="";
for (let ch in frequency){
    if (frequency[ch]>maxCount){
        maxCount=frequency[ch]
        maxchar=ch;

    }
    
}
console.log(frequency)
    console.log("maxCount:",maxCount)
    console.log("maxchar:",maxchar)
});