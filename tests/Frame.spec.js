const {test, expect}=require('@playwright/test')

test("Frames", async ({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    let frame =page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame.fill("//input[@name='mytext1']","Hello")
    await page.waitForTimeout(3000)

    const allFrames =page.frames()
    console.log(allFrames.length)

    
})