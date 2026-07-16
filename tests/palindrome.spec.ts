import {test} from '@playwright/test';
test('palindrome test',async()=>{
let str ="reviver";
let reverse="";
for (let i =str.length-1;i>=0;i--){
    reverse=reverse+str[i]
}
if (str===reverse){
    console.log("palindrome")

}
else{
    console.log("not a palindrome")
}
});