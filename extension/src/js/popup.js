import '../css/popup.css';

// https://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html
chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
  chrome.tabs.sendMessage(tabs[0].id, {command: "start"});
});