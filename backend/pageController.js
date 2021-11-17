const pageScraper = require('./pageScraper');
const fs = require('fs');

async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        let scrapedSite = {};
        scrapedSite['strategie'] = await pageScraper.scraper(browser, 'strategie');
        scrapedSite['specifications'] = await pageScraper.scraper(browser, 'specifications');
        scrapedSite['uxui'] = await pageScraper.scraper(browser, 'uxui');
        scrapedSite['contenus'] = await pageScraper.scraper(browser, 'contenus');
        scrapedSite['frontend'] = await pageScraper.scraper(browser, 'frontend');
        scrapedSite['architecture'] = await pageScraper.scraper(browser, 'architecture');
        scrapedSite['backend'] = await pageScraper.scraper(browser, 'backend');
        scrapedSite['hebergement'] = await pageScraper.scraper(browser, 'hebergement');
        await browser.close();
        fs.writeFile(__dirname + '/../frontend/src/' + "gr491.json", JSON.stringify(scrapedSite), 'utf8', function(err) {
            if(err) return console.log(err);
        })

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)