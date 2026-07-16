import { test} from '@playwright/test';
test('vowel and consonant count',async()=>{
let str="Automation testing";
let vowels =0;
let consonants=0;
str=str.toLowerCase();
for (let i=0;i<str.length;i++){
    if(str[i]>='a'&& str[i]<='z'){

    }
     if (str[i] === ' ') {
        continue;
     }
    if(
        str[i]==='a' ||
        str[i]==='e' ||
        str[i]==='i' ||
        str[i]==='o' ||
        str[i]==='u' 
    ){
        vowels++
    }
    else{
        consonants++
    }
}
console.log("vowels count:",vowels)
console.log("consonants count:",consonants)
});