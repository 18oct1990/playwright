//import (test,expect) from '@playwright/test'
const {test,expect} = require('@playwright/test')

// Creating anonymous fucntion
test("Locator",async({page}) => {

await page.goto("https://demoblaze.com/")
// Using property to find locator
await page.click("id=login2")
// Using CSS to find locator
await page.fill('#loginusername','18oct1990')
await page.fill("input[id='loginpassword']",'Password')
// Using CSS to find locator
await page.click('button[onclick="logIn()"]')

//Verifying logout link
 const logoutLink = await page.locator("id=logout2")
 await expect(logoutLink).toBeVisible()

 page.close
})
