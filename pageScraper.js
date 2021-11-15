const scraperObject = {
    url: 'https://gr491.isit-europe.org/?famille=frontend',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);
        await page.waitForSelector('.famille');
        let urls = await page.$$eval('.container > a', links => {
            links= links.map(a => a.href);
            return links;
        });
        console.log(urls);
    }

}

module.exports = scraperObject;