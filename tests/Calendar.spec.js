const {test, expect}=require("@playwright/test")


 test("Date Picker", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.locator("#datepicker").click()

    let year="2024"
    let month="March"
    let selectDate= "22"
    
    while(true)
    {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

        if(currentYear==year && currentMonth==month)
        {
            break
        }

    }

   const dates =await page.$$(".ui-state-default")

   await page.locator(`//a[@class="ui-state-default"][text()="${selectDate}"]`).click()
   await page.waitForTimeout(4000)

   /*for(const date of dates)
   {
        if (await date.textContent()==selectDate)
        {
            await date.click()
            break

        }
        
    }

    await page.waitForTimeout(4000)*/


 })