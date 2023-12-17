const {test, expect}=require ('@playwright/test')

test("Autosuggestion From List", async ({page})=>
{
    await page.goto("https://www.redbus.in/")
    await page.locator("#src").fill("Del")

    await page.waitForTimeout(1000)

    await page.waitForSelector(".placeHolderMainText")
     let autoSuggest =await page.$$(".placeHolderMainText")

     for(let list of autoSuggest)
     {
         let placeName = await list.textContent() 
        if (placeName.includes("ISBT Kashmiri Gate"))
        {
            await list.click()
            break
        }
     }
     await page.waitForTimeout(3000)

}

)