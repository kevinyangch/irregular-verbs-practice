// 題庫：原形 + 三態 + 中文
const verbs = [
  { base: "hold", past: "held", pp: "held", zh: "抓住；保持" },
  { base: "keep", past: "kept", pp: "kept", zh: "保持；保有" },
  { base: "lead", past: "led", pp: "led", zh: "帶領；領導" },
  { base: "leave", past: "left", pp: "left", zh: "留下；離開" },
  { base: "lend", past: "lent", pp: "lent", zh: "借出" },
  { base: "light", past: "lit", pp: "lit", zh: "點燃" },
  { base: "lose", past: "lost", pp: "lost", zh: "輸；失去；迷路" },
  { base: "make", past: "made", pp: "made", zh: "製造；做" },
  { base: "mean", past: "meant", pp: "meant", zh: "意指" },
  { base: "meet", past: "met", pp: "met", zh: "遇見" },
  { base: "pay", past: "paid", pp: "paid", zh: "付費" },
  { base: "say", past: "said", pp: "said", zh: "說" },
  { base: "sell", past: "sold", pp: "sold", zh: "賣" },
  { base: "send", past: "sent", pp: "sent", zh: "寄" },
  { base: "shine", past: "shone", pp: "shone", zh: "照耀；閃光" },
  { base: "shoot", past: "shot", pp: "shot", zh: "投射；開槍" },
  { base: "sit", past: "sat", pp: "sat", zh: "坐" },
  { base: "sleep", past: "slept", pp: "slept", zh: "睡覺" },
  { base: "smell", past: "smelt", pp: "smelt", zh: "聞" },
  { base: "spell", past: "spelt", pp: "spelt", zh: "拼字" },
  { base: "spend", past: "spent", pp: "spent", zh: "花費；花時間" },
  { base: "stand", past: "stood", pp: "stood", zh: "起立" },
  { base: "stick", past: "stuck", pp: "stuck", zh: "黏" },
  { base: "sweep", past: "swept", pp: "swept", zh: "清掃" },
  { base: "teach", past: "taught", pp: "taught", zh: "教導" },
  { base: "tell", past: "told", pp: "told", zh: "說；告訴" },
  { base: "think", past: "thought", pp: "thought", zh: "思考；想" },
  { base: "understand", past: "understood", pp: "understood", zh: "了解" },
  { base: "win", past: "won", pp: "won", zh: "贏" }
];

let currentIndex = null;

function randomIndex() {
  return Math.floor(Math.random() * verbs.length);
}

function renderCurrent() {
  if (currentIndex === null) return;
  const v = verbs[currentIndex];
  document.getElementById("wordBase").textContent = v.base;
  document.getElementById("wordMeaning").textContent = v.zh;
  document.getElementById("forms").textContent = ""; // 初始不顯示三態
}

function nextWord() {
  let newIndex = randomIndex();
  if (currentIndex !== null && verbs.length > 1) {
    while (newIndex === currentIndex) {
      newIndex = randomIndex();
    }
  }
  currentIndex = newIndex;
  renderCurrent();
}

// 顯示三態，並自動念出三態
function showForms() {
  if (currentIndex === null) return;
  const v = verbs[currentIndex];
  const formsDiv = document.getElementById("forms");
  formsDiv.innerHTML = `
    <span><strong>Base</strong>: ${v.base}</span>
    <span><strong>Past</strong>: ${v.past}</span>
    <span><strong>PP</strong>: ${v.pp}</span>
  `;

  // 顯示時自動念出三態
  speakForms();
}

// 只念 BASE 的發音
function speakBase() {
  if (currentIndex === null) return;
  const v = verbs[currentIndex];

  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音合成（Web Speech API）。請換用 Chrome 或 Safari 測試。");
    return;
  }

  const text = v.base; // 只念原形

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = text;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 念出單字的三態：Base, Past, PP
function speakForms() {
  if (currentIndex === null) return;
  const v = verbs[currentIndex];

  if (!("speechSynthesis" in window)) {
    // 不支援時只顯示三態，不強制跳錯
    console.warn("Web Speech API is not available on this browser.");
    return;
  }

  const text = `${v.base}, ${v.past}, ${v.pp}`;

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = text;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

window.addEventListener("load", () => {
  // 綁定按鈕事件
  document.getElementById("btnShowForms").addEventListener("click", showForms);
  // 「確認發音」按鈕只念 BASE
  document.getElementById("btnSpeak").addEventListener("click", speakBase);
  document.getElementById("btnNext").addEventListener("click", nextWord);

  // 初次載入時先出一題
  nextWord();
});