 const {test, expect}=require("@playwright/test")


 test("Web Table Operations", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const webTable= page.locator("#productTable")

    // 1) Find row count
    const rows = webTable.locator("tbody tr")
    const rowCount= await rows.count()
    console.log(rowCount)

    expect(rowCount).toBe(5)

    // 2) Find column count
    const columns=page.locator("thead tr th")
    const columnCount= await columns.count()
    console.log(columnCount)

    expect(columnCount).not.toBe(5)

    // 3) Check third product

    /*const matchedRow =rows.filter({
        has: page.locator("td"),
        hasText: "Product 3"

    })*/

    //await matchedRow.locator("input").check()

    //await page.waitForTimeout(4000)

    // Check multiple checkbox

    // 4) Click multiple checkbox
    //await filterCheckbox(rows,page,"Product 1")
    //await filterCheckbox(rows,page,"Product 2")

    //5) Fetch data from Webtable

    for(let i=0; i<=rowCount; i++)
    {
        const row = rows.nth(i) // Traverse till Row count
        const cells = rows.locator("td") // Store all cells in one variable
        
        for(let j=0; j<=await cells.count(); j++ ) // Traverse till Cell count
        {
             let cellValue= await cells.nth(j).textContent()
             console.log(cellValue)
        }

    }



 })

 // Function to select multiple products

 async function filterCheckbox(rows, page, productName)
    {
        const matchedRow= rows.filter({
            has: page.locator("td"),
            hasText: productName

        })
        await matchedRow.locator("input").check()

        await page.waitForTimeout(4000)
    }