import {test,expect, request} from "@playwright/test"
test('get api',async ({request})=>{
const response= await request.delete('http://localhost:8080/api/DeleteTutorial/152')
console.log(response.status());
// console.log(await response.text())
});