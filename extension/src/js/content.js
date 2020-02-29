const exe = () => {
  // eslint-disable-next-line no-console
  console.log('[start]eat virus');

  // 末端の要素のtextを置換
  const { body } = document;
  getChildrenAndReplace(body);

  // 全部置換しても大丈夫そうな要素
  replaceByTagName('span');
  replaceByTagName('h1');
  replaceByTagName('h2');
  replaceByTagName('h3');
  replaceByTagName('h4');
  // replaceByTagName('a');
  // replaceByTagName('p');
  replaceImg();
  // eslint-disable-next-line no-console
  console.log('[end]eat virus');
};

const replaceImg = () => {
  const imgs = document.getElementsByTagName('img');
  // eslint-disable-next-line no-restricted-syntax
  for (const img of imgs) {
    img.src = getImgUrl();
  }
  const sources = document.getElementsByTagName('source');
  // eslint-disable-next-line no-restricted-syntax
  for (const source of sources) {
    source.srcset = getImgUrl();
  }
};
const getImgUrl = () => chrome.extension.getURL(`cat${randRange(1, 5).toString()}.jpg`);
// https://qiita.com/uto-usui/items/7193db237175ba15aaa3
const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const replaceByTagName = (tag) => {
  const elements = document.getElementsByTagName(tag);
  // eslint-disable-next-line no-restricted-syntax
  for (const element of elements) {
    replaceText(element);
  }
};
const getChildrenAndReplace = (node) => {
  if (node.children.length === 0) {
    replaceText(node);
  } else {
    const { children } = node;
    // eslint-disable-next-line no-restricted-syntax
    for (const child of children) {
      getChildrenAndReplace(child);
    }
  }
};

const replaceText = (e) => {
  // 末尾nodeだけ
  if (e.textContent) {
    let text = e.textContent;
    text = text.replace(/コロナウイルス/g, '猫ちゃん');
    text = text.replace(/コロナ/g, '子猫');
    text = text.replace(/ウイルス/g, '🐈');
    text = text.replace(/肺炎/g, '肉球');
    text = text.replace(/新型/g, '今までより可愛い');
    text = text.replace(/死亡/g, '😺可愛い');
    text = text.replace(/死者/g, '🐈好き');
    text = text.replace(/感染/g, '猫好き');
    text = text.replace(/トイレットペーパー/g, 'キャットフード');
    text = text.replace(/マスク/g, 'またたび');
    text = text.replace(/重篤/g, '猫しか見えない');
    e.textContent = text;
  }
};


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
        // eslint-disable-next-line no-console
        console.warn('invalid command');
    }
  });
};


addListenerFromPopup();
