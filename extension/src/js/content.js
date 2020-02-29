
const exe = () => {
  console.log('[start]eat virus');

  // 末端の要素のtextを置換
  const body = document.body;
  getChildrenAndReplace(body);

  // 全部置換しても大丈夫そうな要素
  replaceByTagName('span');
  replaceByTagName('h1');
  replaceByTagName('h2');
  replaceByTagName('h3');
  replaceByTagName('h4');
  // replaceByTagName('a');
  // replaceByTagName('p');

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

const replaceByTagName = (tag) => {
  const elements = document.getElementsByTagName(tag);
  for (const element of elements) {
    replaceText(element);
  }

}
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
  if (e.textContent) {
    let text = e.textContent;
    text = text.replace(/コロナウイルス/g, '猫ちゃん');
    text = text.replace(/コロナ/g, '子猫');
    text = text.replace(/ウイルス/g, '🐈');
    text = text.replace(/肺炎/g, '肉球');
    text = text.replace(/新型/g, '今までより可愛い');
    text = text.replace(/死亡/g, '😺可愛い');
    text = text.replace(/死亡/g, '🐈好き');
    text = text.replace(/感染/g, '猫好き');
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
