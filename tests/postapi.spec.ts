import {test,expect, request} from "@playwright/test"
test('get api',async ({request})=>{
const response= await request.post('http://localhost:8080/api/AddTutorials',{data:
        {
         "id" : 154,
        "title": "postapi",
        "description": "demo",
        "published": false
        }
    })
console.log(response.status());
console.log(await response.text())
});