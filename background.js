chrome.webNavigation.onCompleted.addListener((details) => {
  const url = new URL(details.url);
  if (url.protocol === "http:") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icons/icon-128.png", // Ensure the path is correct
      title: "Unsecure Connection",
      message: `You are visiting an unsecure website: ${details.url}`,
      priority: 2
    });
  }
}, { url: [{ urlMatches: "http://*" }] });
