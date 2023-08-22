chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {  // This ensures the event is for a URL change
      if (changeInfo.url.includes('localhost') && changeInfo.url.includes('/weatherforecast')) {
        let port = changeInfo.url.split('localhost:')[1].split('/')[0];
        
        chrome.tabs.remove(tabId);
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon.png',
          title: 'API Launched!',
          message: `.NET Core API was successfully launched at port ${port}`
        });
      }
    }
  });
  