(() => {
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

  const icons = {
    y: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#CC2020" stroke="white" stroke-width="4"/><path d="M26 26L14 14M14 26L26 14M38 20C38 23.5601 36.9443 27.0402 34.9665 30.0003C32.9886 32.9603 30.1774 35.2674 26.8883 36.6298C23.5992 37.9922 19.98 38.3487 16.4884 37.6541C12.9967 36.9596 9.78943 35.2453 7.27208 32.7279C4.75474 30.2106 3.04041 27.0033 2.34587 23.5116C1.65134 20.02 2.0078 16.4008 3.37018 13.1117C4.73255 9.82263 7.03966 7.01141 9.99974 5.03355C12.9598 3.05568 16.4399 2 20 2C24.7739 2 29.3523 3.89642 32.7279 7.27208C36.1036 10.6477 38 15.2261 38 20Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    x: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="18" fill="#33B175" stroke="white" stroke-width="4"/><path d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 20L18 26L28 16" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    collapse:
      '<svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_374_489)"><path d="M4 19L14 9L24 19" stroke="#F9F8F8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_374_489"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>',
    expand:
      '<svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_374_488)"><path d="M4 9L14 19L24 9" stroke="#F9F8F8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_374_488"><rect width="28" height="28" fill="white"/></clipPath></defs></svg>',
  };

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
    hosts: data,
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
    adblockHostDiv.classList.add('adblockHostDiv');
    adblockHostDiv.style.color = 'grey';
    adblockHostDiv.innerHTML = '<span class="text-start">' + url + '</span>';
    div.appendChild(adblockHostDiv);

    try {
      await fetch('https://' + url, config, timeout, parent, div)
        .then((response) => {
          if (response.status !== 200) {
            adblockHostDiv.classList.add('blockedGreen');
            adblockVariables.blocked += 1;
            adblockHostDiv.innerHTML = response.status + ' || 123';
          } else if (
            response === null ||
            response === undefined ||
            response === '' ||
            (typeof response === 'object' && Object.keys(response).length === 0)
          ) {
            adblockHostDiv.classList.add('blockedRed');
            adblockVariables.notblocked += 1;
            adblockHostDiv.innerHTML = response.status + " || 456"
          }
        })
        .catch((error) => {
          adblockHostDiv.classList.add('blockedGreen');
          adblockVariables.blocked += 1;
          adblockHostDiv.innerHTML = response.status + ' || 000';
        });
    } catch (error) {
      console.log(error, 'error');
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
        '<div class="categoryDiv d-md-flex"><h2 class="adCategory text-uppercase">' +
        key +
        `</h2> <button class="toggle-button"><span class='status text-start'>Collapse</span> <span class='svg'>${icons.collapse} </span> </button> </div>`;
      testWrapper.appendChild(categoryLinks);
      var category = data[key];
      var total_hosts = 0;
      adblockVariables.hosts[key] = {};
      var dd_1 = document.createElement('div');
      dd_1.classList.add('rowDiv');

      categoryLinks.appendChild(dd_1);
      Object.keys(category).forEach((keyC) => {
        var tests_count = 0;
        var div = document.createElement('div');
        div.classList.add('svgDiv', 'd-block');
        const testDiv = document.createElement('div');
        div.classList.add('test', 'show', 'column');
        div.id = keyC;
        var fDiv = document.createElement('div');
        fDiv.classList.add('fDiv');
        var domain = document.createElement('h3');
        domain.classList.add('domain');
        domain.innerHTML = keyC;
        fDiv.appendChild(domain);
        div.appendChild(fDiv);
        div.appendChild(testDiv);
        dd_1.appendChild(div);
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

      const toggleButton = categoryLinks.querySelector('.toggle-button');
      const svg = categoryLinks.querySelector('.svg');
      const status = categoryLinks.querySelector('.status');
      toggleButton.addEventListener('click', () => {
        const tests = categoryLinks.querySelectorAll('.rowDiv');
        tests.forEach((test) => {
          test.classList.toggle('d-none');
          if (status.innerHTML === 'Collapse') {
            status.innerHTML = 'Expand';
            svg.innerHTML = icons.expand;
          } else {
            status.innerHTML = 'Collapse';
            svg.innerHTML = icons.collapse;
          }
        });
      });
    });

    let results = await Promise.all(fetches);
    return results;
  }

  function ad_script_test() {
    adblockVariables.script.ads = typeof s_test_ads == 'undefined';
    adblockVariables.script.pagead = typeof s_test_pagead == 'undefined';
    adblockVariables.script.partnerads =
      typeof s_test_partnerads == 'undefined';
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

  function getRandomPercentage() {
    var p = (100 / adblockVariables.total) * adblockVariables.blocked;
    return Math.round(p);
  }

  function updateRandomDiv() {
    const div = document.getElementById('percentage');
    div.innerHTML = `${getRandomPercentage()} <i class="fa-solid fa-percent ms-2 mt-5" style="color: #ffffff; font-size: 80px"></i>`;
  }

  let intervalId;
  function startRandomWidthChange(duration) {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      updateRandomDiv();
    }, 100);

    setTimeout(() => {
      clearInterval(intervalId);
    }, duration);
  }

  startRandomWidthChange(10000);

  function softReload() {
    location.reload();
  }

  document.addEventListener('DOMContentLoaded', function () {
    startAdBlockTesting().then(() => {
      setTimeout(() => {
        const adblockTestLog = document.querySelector('#adblockTestLog');
        const percentage = document.getElementById('percentage');
        const retest = document.getElementById('retest');
        retest.classList.remove('disabled');
        adblockTestLog.innerHTML =
          '<h3>' +
          ' Total : ' +
          adblockVariables.total +
          '</h3> <div class="stats d-md-flex"> <h4 class="indStat"> ' +
          icons.x +
          adblockVariables.blocked +
          ' Blocked</h4><h4 class="indStat"> ' +
          icons.y +
          adblockVariables.notblocked +
          ' Unblocked </h4> </div>';

        const percent =
          (adblockVariables.blocked / adblockVariables.total) * 100;
        percentage.innerHTML =
          Math.round(percent) +
          '<i class="fa-solid fa-percent ms-2 mt-5" style="color: #ffffff;"></i>';

        const adblockDivs = document.querySelectorAll('.adblockHostDiv');

        adblockDivs.forEach(function (adblockDiv) {
          const textSpan = adblockDiv.querySelector('span');

          adblockDiv.addEventListener('click', function () {
            const textToCopy = textSpan.textContent;
            copyTextToClipboard(textToCopy);
            showCopyModal();
          });
        });

        function copyTextToClipboard(text) {
          navigator.clipboard
            .writeText(text)
            .then(function () {
              console.log('Text copied to clipboard:', text);
            })
            .catch(function (err) {
              console.error('Failed to copy text:', err);
            });
        }

        function showCopyModal() {
          const copyModal = new bootstrap.Modal(
            document.getElementById('copyModal')
          );
          copyModal.show();
        }

        var red = document.getElementsByClassName('blockedRed');
        for (var i = 0; i < red.length; i++) {
          red[i].style.backgroundColor = 'var(--redColor)';
          red[i].style.color = '#fff';
        }
        var green = document.getElementsByClassName('blockedGreen');
        for (var i = 0; i < green.length; i++) {
          green[i].style.backgroundColor = 'var(--greenColor)';
          green[i].style.color = '#fff';
        }
        document.getElementById('adblockTestLog').style.display = 'block';
      }, 2000);
    });
  });

})();

function softReload() {
  location.reload();
}
