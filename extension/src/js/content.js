
const exe = () => {
  console.log('exe');
}


// popupからのmessage
const addListenerFromPopup = () => {
  // eslint-disable-next-line no-unused-vars
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    // console.log('chrome.runtime.onMessage.addListener', msg);

    switch (msg.command) {
      // ツールバー横のアイコンクリック
      case 'start':
        exe();
        break;
      default:
        console.warn('invalid command');
    }
  });
};


window.onload = () => {
  addListenerFromPopup();
};


