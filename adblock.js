const s_test_pagead = true;
var s_test_partnerads = 'https://youtu.be/dQw4w9WgXcQ';
var s_test_ads = 's_test_ads';

class LocalStorageManager {
  constructor(name) {
    this.LS = null;
    this.name = name;
    this.checkLS();
    this.init(name);
  }
  clearAll() {
    this.LS.clear();
  }
  checkLS() {
    if (window && window.localStorage) {
      this.LS = window.localStorage;
    }
  }
  init(name) {
    if (this.LS) {
      if (this.LS[name]) {
        this.data = JSON.parse(this.LS[name]);
      } else {
        this.data = {};
      }
    }
  }

  set(uri, data) {
    this.data[uri] = data;
    if (this.LS) {
      this.LS[this.name] = JSON.stringify(this.data);
    }
  }

  get(uri) {
    if (this.data[uri]) {
      return this.data[uri];
    }
    return false;
  }
}

var adblockLocalStorage = new LocalStorageManager('adblockTest');
var data = {
  Ads: {
    Amazon: [
      'adtago.s3.amazonaws.com',
      'analyticsengine.s3.amazonaws.com',
      'analytics.s3.amazonaws.com',
      'advice-ads.s3.amazonaws.com',
      'advertising-api-eu.amazon.com',
    ],
    'Google Ads': [
      'pagead2.googlesyndication.com',
      'adservice.google.com',
      'pagead2.googleadservices.com',
      'afs.googlesyndication.com',
    ],
    'Doubleclick.net': [
      'stats.g.doubleclick.net',
      'ad.doubleclick.net',
      'static.doubleclick.net',
      'm.doubleclick.net',
      'mediavisor.doubleclick.net',
    ],
    Adcolony: [
      'ads30.adcolony.com',
      'adc3-launch.adcolony.com',
      'events3alt.adcolony.com',
      'wd.adcolony.com',
    ],
    'Media.net': ['static.media.net', 'media.net', 'adservetx.media.net'],
  },
  Analytics: {
    'Google Analytics': [
      'app-measurement.com',
      'analytics.google.com',
      'click.googleanalytics.com',
      'google-analytics.com',
      'ssl.google-analytics.com',
    ],
    Hotjar: [
      'adm.hotjar.com',
      'identify.hotjar.com',
      'insights.hotjar.com',
      'script.hotjar.com',
      'surveys.hotjar.com',
      'careers.hotjar.com',
      'events.hotjar.io',
    ],
    MouseFlow: [
      'mouseflow.com',
      'cdn.mouseflow.com',
      'o2.mouseflow.com',
      'gtm.mouseflow.com',
      'api.mouseflow.com',
      'tools.mouseflow.com',
      'cdn-test.mouseflow.com',
    ],
    FreshWorks: [
      'freshmarketer.com',
      'claritybt.freshmarketer.com',
      'fwtracks.freshmarketer.com',
    ],
    Luckyorange: [
      'luckyorange.com',
      'api.luckyorange.com',
      'realtime.luckyorange.com',
      'cdn.luckyorange.com',
      'w1.luckyorange.com',
      'upload.luckyorange.net',
      'cs.luckyorange.net',
      'settings.luckyorange.net',
    ],
    'Stats WP Plugin': ['stats.wp.com'],
  },
  'Error Trackers': {
    Bugsnag: [
      'notify.bugsnag.com',
      'sessions.bugsnag.com',
      'api.bugsnag.com',
      'app.bugsnag.com',
    ],
    Sentry: ['browser.sentry-cdn.com', 'app.getsentry.com'],
  },
  'Social Trackers': {
    Facebook: ['pixel.facebook.com', 'an.facebook.com'],
    Twitter: ['static.ads-twitter.com', 'ads-api.twitter.com'],
    LinkedIn: ['ads.linkedin.com', 'analytics.pointdrive.linkedin.com'],
    Pinterest: [
      'ads.pinterest.com',
      'log.pinterest.com',
      'analytics.pinterest.com',
      'trk.pinterest.com',
      'widgets.pinterest.com',
    ],
    Reddit: ['events.reddit.com', 'events.redditmedia.com'],
    YouTube: ['ads.youtube.com'],
    TikTok: [
      'ads-api.tiktok.com',
      'analytics.tiktok.com',
      'ads-sg.tiktok.com',
      'analytics-sg.tiktok.com',
      'business-api.tiktok.com',
      'ads.tiktok.com',
      'log.byteoversea.com',
    ],
  },
  Mix: {
    Yahoo: [
      'ads.yahoo.com',
      'analytics.yahoo.com',
      'geo.yahoo.com',
      'udc.yahoo.com',
      'udcm.yahoo.com',
      'advertising.yahoo.com',
      'analytics.query.yahoo.com',
      'partnerads.ysm.yahoo.com',
      'log.fc.yahoo.com',
      'gemini.yahoo.com',
      'adtech.yahooinc.com',
    ],
    Yandex: [
      'extmaps-api.yandex.net',
      'appmetrica.yandex.ru',
      'adfstat.yandex.ru',
      'metrika.yandex.ru',
      'advertising.yandex.ru',
      'offerwall.yandex.net',
      'adfox.yandex.ru',
    ],
    Unity: [
      'auction.unityads.unity3d.com',
      'webview.unityads.unity3d.com',
      'config.unityads.unity3d.com',
      'adserver.unityads.unity3d.com',
    ],
  },
  OEMs: {
    Realme: [
      'iot-eu-logser.realme.com',
      'iot-logser.realme.com',
      'bdapi-ads.realmemobile.com',
      'bdapi-in-ads.realmemobile.com',
    ],
    Xiaomi: [
      'api.ad.xiaomi.com',
      'data.mistat.xiaomi.com',
      'data.mistat.india.xiaomi.com',
      'data.mistat.rus.xiaomi.com',
      'sdkconfig.ad.xiaomi.com',
      'sdkconfig.ad.intl.xiaomi.com',
      'globalapi.ad.xiaomi.com',
      'tracking.rus.miui.com',
    ],
    Oppo: [
      'adsfs.oppomobile.com',
      'adx.ads.oppomobile.com',
      'ck.ads.oppomobile.com',
      'data.ads.oppomobile.com',
    ],
    Huawei: [
      'metrics.data.hicloud.com',
      'metrics2.data.hicloud.com',
      'grs.hicloud.com',
      'logservice.hicloud.com',
      'logservice1.hicloud.com',
      'logbak.hicloud.com',
    ],
    OnePlus: ['click.oneplus.cn', 'open.oneplus.net'],
    Samsung: [
      'samsungads.com',
      'smetrics.samsung.com',
      'nmetrics.samsung.com',
      'samsung-com.112.2o7.net',
      'analytics-api.samsunghealthcn.com',
    ],
    Apple: [
      'advertising.apple.com',
      'tr.iadsdk.apple.com',
      'iadsdk.apple.com',
      'metrics.icloud.com',
      'metrics.apple.com',
      'metrics.mzstatic.com',
      'api-adservices.apple.com',
      'books-analytics-events.apple.com',
      'weather-analytics-events.apple.com',
      'notes-analytics-events.apple.com',
    ],
  },
};

var LS = new LocalStorageManager('adblockTestStore');
var results = LS.get('results');
if (!results) results = [];

var adblockVariables = {
  total: 0,
  blocked: 0,
  notblocked: 0,
  script: {
    ads: null,
    pagead: null,
    partnerads: null,
  },
  hosts: {},
};
const testWrapper = document.getElementById('test'); 

async function testAdHostUrls(url, div, parent) {
  const controller = new AbortController();
  const config = {
    ...{
      method: 'HEAD',
      mode: 'no-cors',
    },
    signal: controller.signal,
  };
  const timeout = setTimeout(() => {
    controller.abort();
  }, 8000);
  adblockVariables.total += 1;
  var adblockHostDiv = document.createElement('div');
  div.appendChild(adblockHostDiv);
  try {
    await fetch('https://' + url, config, timeout, parent, div)
      .then((response) => {
        if (response.type == 'basic' && response.status == 200) {
          adblockHostDiv.innerHTML = '<span>' +  url + '</span>';
          adblockVariables.blocked += 1;
        } else {
          adblockHostDiv.style.background = 'var(--red)';
          adblockHostDiv.innerHTML = '<span>' + url + '</span>';
          adblockVariables.notblocked += 1;
        }
      })
      .catch((error) => {
        adblockHostDiv.style.background = 'var(--green)';
        adblockHostDiv.innerHTML = '<span>' + url + '</span>';
        adblockVariables.blocked += 1;
      });
  } catch (error) {
    console.log(error);
  }
}

async function runAdblockTest() {
  let fetches = [];
  Object.keys(data).forEach((key) => {
    if (key == 'default') return;
    var categoryLinks = document.createElement('div');
    categoryLinks.className = 'grid';
    categoryLinks.id = key;
    categoryLinks.innerHTML =
      '<div><h5>' + key + '</h5><div>';
    testWrapper.appendChild(categoryLinks);
    var category = data[key];
    var total_hosts = 0;
    adblockVariables.hosts[key] = {};
    var dd_1 = document.createElement('div');
    dd_1.classList.add('col-12');
    var dd_2 = document.createElement('div');
    dd_2.classList.add('col-12');

    categoryLinks.appendChild(dd_2);
    categoryLinks.appendChild(dd_1);
    var i = 0;
    Object.keys(category).forEach((keyC) => {
      var tests_count = 0;
      var div = document.createElement('div');
      const testDiv = document.createElement('div');
      div.classList.add('test', 'show');
      div.id = keyC;
      div.innerHTML = "<span>" + keyC + '</span>';
      div.appendChild(testDiv);
      if (i % 2 == 0) {
        dd_2.appendChild(div);
      } else {
        dd_1.appendChild(div);
      }
      i++;
      Object.assign(adblockVariables.hosts[key], { [keyC]: {} });
      if (Object.prototype.hasOwnProperty.call(category, keyC)) {
        var value = category[keyC];
        for (let i = 0; i < value.length; i++) {
          fetches.push(testAdHostUrls(value[i], testDiv, div).then(() => {}));
          tests_count++;
        }
      }
      total_hosts += tests_count;
    });
  });

  let results = await Promise.all(fetches);
  return results;
}

function ad_script_test() {
  adblockVariables.script.ads = typeof s_test_ads == 'undefined';
  adblockVariables.script.pagead = typeof s_test_pagead == 'undefined';
  adblockVariables.script.partnerads = typeof s_test_partnerads == 'undefined';
  adblockVariables.blocked +=
    (adblockVariables.script.ads ? 2 : 0) +
    (adblockVariables.script.pagead ? 2 : 0) +
    (adblockVariables.script.partnerads ? 2 : 0);
  adblockVariables.notblocked +=
    (adblockVariables.script.ads ? 0 : 2) +
    (adblockVariables.script.pagead ? 0 : 2) +
    (adblockVariables.script.partnerads ? 0 : 2);
}

async function startAdBlockTesting() {
  let tests = [];
  tests.push(runAdblockTest());
  let results = await Promise.all(tests);
  return results;
}

document.addEventListener('DOMContentLoaded', function () {
  startAdBlockTesting().then(() => {
    setTimeout(() => {
      const adblockTestLog = document.querySelector('#adblockTestLog');
      adblockTestLog.innerHTML =
        '<span>' +
        ' Total : ' +
        adblockVariables.total +
        '</span><span>' +
        ' ' +
        adblockVariables.blocked +
        ' blocked</span><span>' +
        ' ' +
        adblockVariables.notblocked +
        ' not blocked </span>';
    }, 2000);
  });
});
