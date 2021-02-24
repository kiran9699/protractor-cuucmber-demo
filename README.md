# Getting started with protractor in typescript

- Download & install visual studio code (https://code.visualstudio.com/download)

- Clone the project or create your own folder structure and place this project and open in VSCode.

- Key press ctrl+` to open terminal and make sure you are in current project folder

# Build Project
- Do install packages this will create a folder with node_modules under you project folder with prerequisites mentioned under dependencies section of package.json

      > npm install 

# Setting up WebDriver
- and then Enter webdriver command for 1st time or needed only when you need to update selenium and browser divers versions

      > webdriver-manager update

- and then start server this will activate selenium server with port 4444

      > webdriver-manager start

- if throws error as webdriver-manager: command not found

      > node node_modules/protractor/bin/webdriver-manager update/start

# Conerting the TS files to Js files
Then create another instance of terminal by clicking the + sign and then Enter

      > tsc --build tsconfig.json / yarn build  // this will build the entire project and convert the all .ts files into .js 

# Run tests based on tags mentioned in CucumberOpts
      > protractor dist/protractor.conf.js --baseUrl='https://demo.advanceflow.com' --capabilities.browserName="chrome" 
