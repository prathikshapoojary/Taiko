const{ openBrowser, goto, click, below, press, dropDown, write, closeBrowser } = require('taiko');

const assert = require('assert').strict;
(async () => {
    try{
        await openBrowser();
    }
    catch(error){
        console.log(error);
    } finally{
        await closeBrowser();
    }
})();


