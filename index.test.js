const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const {addMovie, deleteMovie, crossMovie} = require('./automation')
beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/foundations35/Week_6/day_2/automation/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('add a movie to the list', async()=>{
    addMovie(driver, 'd')
    await driver.sleep(2000)
})

test('add a movie to the list', async()=>{
    addMovie(driver, 'g')
    await driver.sleep(2000)
})

test('cross off movie', async () =>{
    crossMovie(driver, '//li[2]/span')
    await driver.sleep(2000)
})

test('delete movie from list', async()=>{
    deleteMovie(driver, '#d')
    await driver.sleep(2000)
})
