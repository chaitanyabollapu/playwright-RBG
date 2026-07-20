import {test,expect, request} from "@playwright/test"
test('get api',async ({request})=>{
const response= await request.get('http://localhost:8080/api/getAllTutorials')
console.log(response.status());
console.log(await response.text())
});