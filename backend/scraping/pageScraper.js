const scraperObject = {
  urlToBan: [
    "https://gr491.isit-europe.org/crit.php?id=3-uxui-afin-d%E2%80%99etre-responsable-le",
    "https://gr491.isit-europe.org/crit.php?id=3-uxui-reduire-les-inegalites-d%E2%80%99acces",
  ],
  id: 0,
  async scraper(browser, language, category) {
    const url =
      language == "fr"
        ? `https://gr491.isit-europe.org/?famille=`
        : `https://gr491.isit-europe.org/en/?famille=`;
    let scrapedData = [];
    let page = await browser.newPage();
    await page.goto(url + category);
    await page.waitForSelector(".famille");
    let critereUrls = await page.$$eval(".container > a", (criteres) => {
      criteres = criteres.map((a) => a.href);
      return criteres;
    });

    let pagePromise = (link) =>
      new Promise(async (resolve, reject) => {
        try {
          console.log(`Navigating to ${link}`);
          if (this.urlToBan.includes(link)) resolve(false);
          let dataObj = {};
          let newPage = await browser.newPage();
          await newPage.goto(link);
          // Build your dataObj
          dataObj["id"] = this.id++;
          dataObj["title"] = await newPage.$eval(
            "h1",
            (text) => text.textContent
          );
          dataObj["url"] = link;
          dataObj["category"] = await newPage.$eval(
            "#chapeau .odd span",
            (text) => text.textContent
          );
          dataObj["odd"] = await newPage.$$eval(
            ".conteneur-bp .odd span a",
            (odds) =>
              odds.map((odd) => {
                odd = odd.textContent.replace(/(\r\n\t|\n|\r|\t|\s)/gm, "");
                return odd;
              })
          );
          dataObj["impacts"] = await newPage.$$eval(".impacts p", (impacts) => {
            impacts = impacts.map(
              (cat) => cat.querySelector("span").textContent
            );
            return impacts;
          });
          dataObj["difficulty"] = await newPage.$eval(
            ".difficulte p",
            (text) => text.textContent
          );
          dataObj["priority"] = await newPage.$eval(
            ".priorite p",
            (text) => text.textContent
          );
          dataObj["life_cycle"] = await newPage.$eval(
            ".acteurs-metiers h4 ~ p",
            (text) => text.textContent
          );
          dataObj["test"] = await newPage.$eval(
            "#texte-fiche p:first-of-type",
            (text) => text.textContent
          );
          dataObj["description"] = await newPage.$eval(
            "#texte-fiche p:nth-of-type(2n)",
            (text) => text.textContent
          );
          let scoreExist = false;
          let score = "";
          try {
            score = await newPage.$eval(
              ".acteurs-metiers div:nth-child(3) p",
              (text) => text.textContent
            );
            scoreExist = true;
          } catch (err) {
            scoreExist = false;
          }
          dataObj["score"] = score;
          resolve(dataObj);
          await newPage.close();
        } catch (error) {
          reject(error);
        }
      });

    for (link in critereUrls) {
      let currentPageData = await pagePromise(critereUrls[link]);
      if (currentPageData !== false) scrapedData.push(currentPageData);
    }

    return scrapedData;
  },
};

module.exports = scraperObject;
