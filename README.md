# GR491 tool
Find all informations about recommandations on INR web site and stock it in JSON file. Use a React App to display all information.

## How to use it
1. Run `cd backend && yarn install` ;
2. Run `yarn start` to get your JSON file (path: */frontend/src/gr491.json*) ;
3. Run `cd ../frontend && yarn install` ;
4. Run `yarn start` to launch the React App based on your JSON file.

## Sources
*Scrapping* : https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer-fr

## Frontend
React App which reads directly data from JSON file *gr491.json*.

## Backend
Node.js tool which scrap the INR web site https://gr491.isit-europe.org/ to collect all information and stock it in JSON file. All data are [open source](https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf).
 
