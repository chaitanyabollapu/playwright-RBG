import {test,expect, request} from "@playwright/test"
test('get api',async ({request})=>{
const response= await request.put('http://localhost:8080/api/UpdateTutorials/154',{data:
        {
         "id" : 155,
        "title": "selenium",
        "description": "java language",
        "published": false
        }
    })
console.log(response.status());
console.log(await response.text())
});