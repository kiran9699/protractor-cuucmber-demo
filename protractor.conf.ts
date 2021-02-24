import { Config, browser } from 'protractor'

export const config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  SELENIUM_PROMISE_MANAGER: false,
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  //  default browserName is chrome but we can pass explicitly by CLI(--capabilities.browserName 'firefox')
  capabilities: {
    allScriptsTimeout: 10000,
    directConnect: true,
    browserName: 'chrome',
    chromeOptions: {
      args: ['--start-maximized', '--no-sandbox', '--ignore-certificate-errors', '--disable-popup-blocking'],

      // This is for allowing the notifications
      w3c: false,
      prefs: {
        'profile.managed_default_content_settings.notifications': 1
      }
    },
  },

  /**  The timeout in milliseconds for each script run on the browser. This
    * should be longer than the maximum time your application needs to
    * stabilize between tasks.
    */
  allScriptsTimeout: 120000,

  /** How long to wait for a page to load. */
  getPageTimeout: 120000,

  suites: {
    
    SMOKE: ['../e2e/src/Features/*.feature'],
    
  },
  specs: [
    '../e2e/src/Features/Search.feature', '../e2e/src/Features/getAPI.feature'
  ],
  params: {
      timeout: 45000

  },
 

  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    strict: true,
    // format: ['json:./jsonresults/cucumber.json'],
    require: ['../dist/e2e/src/hooks/*.js', '../dist/e2e/stepdefinitions/*.js', '../dist/API/stepdefinitions/*.js'],
     tags:
    '@google or @getapi',
    dryRun: false
  },
  
  }

 
 

