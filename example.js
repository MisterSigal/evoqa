let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://0.0.0.0:4444/wd/hub')
    .build();


