
const exe = () => {
  console.log('[start]eat virus');

  // 末端の要素のtextを置換
  const body = document.body;
  getChildrenAndReplace(body);

  // const spans = document.getElementsByTagName('span');
  // for (const span of spans) {
  //   replaceText(span);
  // }
  // const divs = document.getElementsByTagName('div');
  // for (const div of divs) {
  //   replaceText(div);
  // }
  console.log('[end]eat virus');
};


const getChildrenAndReplace = (node) => {
  console.log(node);
  if (node.children.length === 0) {
    replaceText(node);
  } else {
    const children = node.children;
    for (const child of children) {
      getChildrenAndReplace(child)
    }
  }
}

const replaceText = (e) =>{
  // 末尾nodeだけ
  if (e.textContent && e.children.length === 0) {
    let text = e.textContent;
    text = text.replace('コロナウイルス', '猫ちゃん');
    text = text.replace('コロナ', '子猫');
    text = text.replace('ウイルス', '🐈');
    text = text.replace('新型', '今までより可愛い');
    text = text.replace('死亡', '大好き');
    console.log(text);
    e.textContent = text;
  }
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
