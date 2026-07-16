import {test} from '@playwright/test';
test('reverse text',async()=>{

    let str="typescript";
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i]
    }
    console.log(reverse);
});