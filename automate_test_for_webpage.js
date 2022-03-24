const{ openBrowser, goto, click, below, above,  press, dropDown, write, closeBrowser } = require('taiko');
const assert = require('assert').strict;
async function inputfunction() { 
        console.log("\nheading..")
        await click("button");
        await write('admin', into(textBox("First Name"),{force:true}))
        await write('admin', into(textBox("Last Name"),{force:true}))
        await write('XYZ', into(textBox("Organization"),{force:true}))
        await dropDown({name:'organization_type'}).select('Law Firm')
        await write('example@gmail.com', into(textBox("Email"),{force:true}))
        await write(1234567890, into(textBox("Phone"),{force:true}))
        await dropDown({name:"interested_in"}).select('example')
        await click("SUBMIT")
}
(async () => {
    try{
        await openBrowser({args: ["--start-fullscreen"]});
        await goto("url of page", {timeout:10000}); await click("I AGREE");
      
        console.log("\x1b[33m","\nChecking under Data tab.. ")
        await click(link("Legal Data", near("Court Data")))
           
        console.log("\nChecking for Paragraph/text..")
        await text(' Data ', above('  data')).exists()
        await text('example', above("example text")).exists();
        
        console.log("\nChecking for image..")
        await image({alt:"image alt value"}).exists()                                   
                    
        console.log("\nChecking for clicks..")
        await click("Learn more")
        await click("Contact Sales")
        await click(link("Learn more", below("data")));await goBack()
      
        console.log("\nChecking tab..")
        await click(link("Law Firms", above("data Support")))
        
        inputfunction();await click("SUBMIT")//function call

        if(await text("Thank you   ", above("data")).exists()){console.log("\x1b[33m","\nForm Submited\n")}
        else{console.error("\x1b[31m","\nSubmission failed\n");}
    }
    catch(error){
    	console.log("\x1b[31m","Something went wrong");
    } finally{ 
    	await closeBrowser();
    }
})();
