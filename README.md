A home page for showcasing bitcoin exchange rates. 

## Available Scripts

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

## Caveats

The API Url (https://localhost:5001/api/v1/bitcoin/latest) is hardcoded in the BitCoinService js file rather than being in an config/enviornment file. 
The docker files included in the project are just the boiler plate ones and haven't been tested. (Spent bit of time with docker toolbox and couldn't get it working, Duh)
