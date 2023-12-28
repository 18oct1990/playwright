const {test, expect}=require("@playwright/test")
const { beforeEach } = require("node:test")

let page
test.beforeEach(async({browser})=>{
 
page= await browser.newPage()
await page.goto("https://demoblaze.com/")
await page.locator("#login2").click()
await page.locator("#loginusername").fill("18oct1990")
await page.locator("#loginpassword").fill("Password")
await page.click('button[onclick="logIn()"]')

await page.waitForTimeout(2000)



})

test("Add to cart",async()=> {

    await page.getByRole("link",{name:"Samsung galaxy s6"}).click()
    await page.waitForTimeout(2000)
    await page.locator('a[onclick="addToCart(1)"]').click()
    await page.waitForTimeout(2000)

})

test.afterEach(async()=>{
 
    await page.locator("#logout2").click() 
    await page.waitForTimeout(2000)

})