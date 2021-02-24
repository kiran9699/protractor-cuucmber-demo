git clone

npm install

webdriver-manager update 
webdriver-manager start


Build:
tsc --build tsconfig.json

# Run Test Suites
This will run based on Suites.
      > protractor dist/protractor.conf.js --suite=SMOKE [Note suites to be mentioned in Config file]  