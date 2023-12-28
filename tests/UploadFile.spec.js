const {test, expect}=require("@playwright/test")


 test("Date Picker", async ({page})=>{
    await page.goto("https://www.ilovepdf.com/pdf_to_word")

    // Approach without input tag
    
    page.on('filechooser', async (fileChooser) => {
        console.log("File chooser intercepted");
        
        // Add the file to the file chooser
        await fileChooser.setFiles("tests/UploadFiles/Harshit_Saxena.pdf");
      });

    await page.click("#pickfiles")

    //Approach when there is Input tag 

    //await page.waitForSelector("#pickfiles")
    //await page.locator("#pickfiles").setInputFiles("tests\UploadFIles\Harshit_Saxena.pdf")
    await page.waitForTimeout(4000)
    

    
 })


