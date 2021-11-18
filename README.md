# GR491 tool
Find all informations about recommandations on INR web site and stock it in JSON file. Use a React App to display all information.

## How to use it
1. Run `cd backend && yarn install` ;
2. Run `yarn start` to get your JSON file (path: */frontend/src/gr491.json*) ;
3. Run `cd ../frontend && yarn install` ;
4. Run `yarn start` to launch the React App based on your JSON file.

You can choose with the dropdown button a category, it'll update all the critaria shown. Click on one of them to see details.

By default all columns are hidden except the title, the priority and the test. Other columns can be activated to sort data for example.

### Next steps
- Add a possibility to read overflown cells ;
- Check a line to mark it as done ;
- Link to DB (MongoDB ?) to save your project's progress ;
- Styling ;

## Sources
*Scrapping* : https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer-fr

## Frontend
React App which reads directly data from JSON file *gr491.json*.

## Backend
Node.js tool which scrap the INR web site https://gr491.isit-europe.org/ to collect all information and stock it in JSON file. All data are [open source](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).
### Debug
- ID 181 to 183 : same data because they have the same URL : if there are many titles, loop on them ? 
 
