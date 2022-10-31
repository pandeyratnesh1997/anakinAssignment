

const webdriver = require('selenium-webdriver');
const By = webdriver.By;

// console.log("webdriver", webdriver)

const chromedriver = require('chromedriver');

const { HttpResponse } = require('selenium-webdriver/devtools/networkinterceptor');
async function selenium4Test () {
  let driver = new webdriver.Builder().forBrowser('chrome').build();
    const connection = await driver.createCDPConnection('page');
    try {
      await driver.get('https://food.grab.com/ph/en/');
      driver.findElement(By.xpath('//*[@id="page-content"]/div[5]/div[1]/div/div[2]/div/div/div/div[1]/a')).click();
    } catch (error) {
      console.log(error)
    }

    // <div class="swiper-slide slide___q2S4n swiper-slide-active"><a href="/ph/en/restaurant/mcdonald-s-good-earth-delivery/2-C2DBEX5CC4MEVN" style="color: inherit; text-decoration: none;"><div class="ant-row-flex ant-row-flex-start ant-row-flex-top"><div class="ant-col-24 colPhoto___3vb-o ant-col-md-24 ant-col-lg-24"><div class="promoTag___IYhfm"><div class="placeholder___1xbBh restoPhoto___3nncy"><img alt="Order McDonald's - Good Earth" class="realImage___2TyNE show___3oA6B" src="https://d1sag4ddilekf6.azureedge.net/compressed/merchants/2-C2DBEX5CC4MEVN/list/2eb9ac289714430cbaa9ec424f0e05a3_1643872186557118881.png"></div><div class="promoTagHead___1bjRG">Promo</div><div class="promoTagTail___2Jy3D"></div></div></div><div class="ant-col-24 colInfo___3iLqj ant-col-md-24 ant-col-lg-24"><h6 class="name___2epcT">McDonald's - Good Earth</h6><div class="basicInfoContainer___1DcNs"><div class="basicInfoRow___UZM8d cuisine___T2tCh">American, Burgers, Fast Food, #Combodeals, #ComboDealsBurgers</div><div class="basicInfoRow___UZM8d numbers___2xZGn"><div class="numbersChild___2qKMV"><div class="medium___3F_Er ratingStar infoItemIcon___23Zvv" role="button" tabindex="0" style="display: inline-block; background-position: center center; background-repeat: no-repeat; background-size: contain; background-image: url(&quot;/static/images/icons/icon-star.svg&quot;);"></div>4.3</div><div class="numbersChild___2qKMV"><div class="medium___3F_Er deliveryClock infoItemIcon___23Zvv" role="button" tabindex="0" style="display: inline-block; background-position: center center; background-repeat: no-repeat; background-size: contain; background-image: url(&quot;/static/images/icons/icon-clock.svg&quot;);"></div>25 mins&nbsp;&nbsp;•&nbsp;&nbsp;1 km</div></div></div><div class="basicInfoRow___UZM8d discount___3h-0m"><div class="medium___3F_Er discountIcon infoItemIcon___23Zvv" role="button" tabindex="0" style="display: inline-block; background-position: center center; background-repeat: no-repeat; background-size: contain; background-image: url(&quot;/static/images/icons/icon-promo-tag.svg&quot;);"></div><span class="discountText___GQCkj">P90 OFF min. purchase of P400 w/ code</span></div></div></div></a></div>


    let url = 'https://portal.grab.com/foodweb/v2/merchants/2-C2DBEX5CC4MEVN?latlng=14.5995,120.9842';
    let httpResponse = new HttpResponse(url);
    httpResponse.addHeaders("Content-Type", "UTF-8");
    httpResponse.body = url;

    try {
      await driver.onIntercept(connection, httpResponse, async function () {
        let body = await driver.getPageSource();
        console.log(httpResponse);
      })
      await driver.get(url);
    } catch (error) {
      console.log(error)
    }
    driver.quit();
}

selenium4Test();

