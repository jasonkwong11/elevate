Hello, Fidelis UI team. I appreciate your consideration. To save you time, I included notes on how I completed each requirement below. Thanks!

# Setup Instructions
Simply clone this repo, cd into the elevate-ui directory, and run $ npm install.

Then run $ npm start to start the local server and navigate to localhost:3000 in your browser.

Run Jest tests with $ npm test

### Basic Features
 DONE - Load the data from alerts.json 
  ... found in src/constants
 DONE - Display a list of items
  ... composed of a Sort component, which allows the User to sort each Alert field alphabetically/numerically by clicking on the table header

 DONE - Clicking on a row will select an alert and display a detail view
  ... given more time, I'd put the detail view in a Popover or a right sidebar. Right now it's simply centered above the table which isn't ideal.

### Advanced features
 DONE - Show some stats by analyzing the data
  ... Shows the count of the different Severities and Protocols.
  ... Automatically updates when User submits a search query
  ... Given more time, I'd format it in a left sidebar instead of it being centered above the table. I'd also add the Client IP section
 DONE - Provide a search box to quickly filter the list
  ... also updates the stats, allows for partial matches
 - Clicking on a stat/filter item will filter the list view
  ...Didn't have enough time to do this unfortunately

### Bonus features
 - Pagination for the list view
 - Provide visualizations based on the data
  DONE - Unit Tests
    ... brief Jest tests ensure the Table component renders data properly
    ... given more time, I'd test additional components more thoroughly
