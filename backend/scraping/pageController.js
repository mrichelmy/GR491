const pageScraper = require('./pageScraper');
const fs = require('fs');
const { frenchTheme, englishTheme } = require('./theme');

async function scrapeAll(browserInstance, language){
    let browser;
    try{
        browser = await browserInstance;
        let scrapedSite = {};
        const themeObject = language == 'fr' ? frenchTheme : englishTheme ; 
        scrapedSite[themeObject.strategy] = await pageScraper.scraper(browser, language, themeObject.strategy);
        scrapedSite[themeObject.specifications] = await pageScraper.scraper(browser, language, themeObject.specifications);
        scrapedSite[themeObject.uxui] = await pageScraper.scraper(browser, language, themeObject.uxui);
        scrapedSite[themeObject.contents] = await pageScraper.scraper(browser, language, themeObject.contents);
        scrapedSite[themeObject.frontend] = await pageScraper.scraper(browser, language, themeObject.frontend);
        scrapedSite[themeObject.architecture] = await pageScraper.scraper(browser, language, themeObject.architecture);
        scrapedSite[themeObject.backend] = await pageScraper.scraper(browser, language, themeObject.backend);
        scrapedSite[themeObject.hosting] = await pageScraper.scraper(browser, language, themeObject.hosting);
        await browser.close();
        fs.writeFile(__dirname + '/../data/' + language + '_' + "gr491.json", JSON.stringify(scrapedSite), 'utf8', function(err) {
            if(err) return console.log(err);
        })

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, language) => scrapeAll(browserInstance,language)