// Fetch data from web table from all the pages

const {test,expect}=require("@playwright/test")




test ("Fetch data from all pages", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
   
    //1) Find Webtable
    const table=await page.locator("#productTable")
   
    //2) Find Rows and Rowscount
    const rows=await table.locator("tbody tr")
    const rowsCount=await rows.count()
    //console.log(rowsCount)

    //3) Find Columns and Columncount
    const columns=await table.locator("thead tr th")
    const columnCount=await columns.count()
    //console.log(columnCount)

    //4) Print data from first page

    /* for(let i=0;i<rowsCount-1;i++)
    {
        const row =rows.nth(i)              //Iterating rows one by one
        const cells = row.locator("td")     //Finding all cells within the row


        for(let j=0;j<await cells.count();j++)
        {
            const cell =cells.nth(j)                //Iterating cell one by one
            console.log (await cell.textContent())  //Printing cell value one by one
        }
    } */

    //5) Print data from all the pages

     // a) Click on pagination

    // Find locator of pagination
    
    const pageLocator=await page.locator("#pagination")
    const pages=await pageLocator.locator("li a")
    const pageCount =await pages.count()
    console.log(pageCount)

    for(let i=0; i<pageCount; i++)
    {
        const pageNumber =await pages.nth(i)
        pageNumber.click()



            for(let i=0;i<rowsCount-1;i++)
        {
                const row =rows.nth(i)              //Iterating rows one by one
                const cells = row.locator("td")     //Finding all cells within the row


                for(let j=0;j<await cells.count();j++)
                {
                    const cell =cells.nth(j)                //Iterating cell one by one
                    console.log (await cell.textContent())  //Printing cell value one by one
                }
        }

        

        await page.waitForTimeout(1000)


    }




    

 
})







//4) Print data from all the pages


