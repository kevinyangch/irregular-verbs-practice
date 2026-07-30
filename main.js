// 動詞三態題庫：原形 + 三態 + 中文
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

let currentVerbIndex = null;

function randomVerbIndex() {
  return Math.floor(Math.random() * verbs.length);
}

function renderCurrentVerb() {
  if (currentVerbIndex === null) return;
  const v = verbs[currentVerbIndex];
  document.getElementById("wordBase").textContent = v.base;
  document.getElementById("wordMeaning").textContent = v.zh;
  document.getElementById("forms").textContent = ""; // 初始不顯示三態
}

function nextVerb() {
  let newIndex = randomVerbIndex();
  if (currentVerbIndex !== null && verbs.length > 1) {
    while (newIndex === currentVerbIndex) {
      newIndex = randomVerbIndex();
    }
  }
  currentVerbIndex = newIndex;
  renderCurrentVerb();
}

// 顯示三態，並自動念出三態
function showVerbForms() {
  if (currentVerbIndex === null) return;
  const v = verbs[currentVerbIndex];
  const formsDiv = document.getElementById("forms");
  formsDiv.innerHTML = `
    <span><strong>Base</strong>: ${v.base}</span>
    <span><strong>Past</strong>: ${v.past}</span>
    <span><strong>PP</strong>: ${v.pp}</span>
  `;

  speakVerbForms();
}

// 只念 Base 發音
function speakVerbBase() {
  if (currentVerbIndex === null) return;
  const v = verbs[currentVerbIndex];

  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音合成（Web Speech API）。請換用 Chrome 或 Safari 測試。");
    return;
  }

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = v.base;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 念出三態：Base, Past, PP
function speakVerbForms() {
  if (currentVerbIndex === null) return;
  const v = verbs[currentVerbIndex];

  if (!("speechSynthesis" in window)) {
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

// 形容詞比較級題庫：原級 + 比較級
const adjectives = [
  { base: "fast", comp: "faster", zh: "快 → 更快" },
  { base: "big", comp: "bigger", zh: "大 → 更大" },
  { base: "happy", comp: "happier", zh: "開心 → 更開心" },
  { base: "interesting", comp: "more interesting", zh: "有趣 → 更有趣" },
  { base: "slow", comp: "slower", zh: "慢 → 更慢" },
  { base: "hot", comp: "hotter", zh: "熱 → 更熱" },
  { base: "easy", comp: "easier", zh: "容易 → 更容易" },
  { base: "expensive", comp: "more expensive", zh: "昂貴 → 更昂貴" }
];

let currentAdjIndex = null;

function randomAdjIndex() {
  return Math.floor(Math.random() * adjectives.length);
}

function renderCurrentAdj() {
  if (currentAdjIndex === null) return;
  const a = adjectives[currentAdjIndex];
  document.getElementById("adjBase").textContent = a.base;
  document.getElementById("adjMeaning").textContent = a.zh;
  document.getElementById("adjForms").textContent = ""; // 初始不顯示比較級
}

function nextAdj() {
  let newIndex = randomAdjIndex();
  if (currentAdjIndex !== null && adjectives.length > 1) {
    while (newIndex === currentAdjIndex) {
      newIndex = randomAdjIndex();
    }
  }
  currentAdjIndex = newIndex;
  renderCurrentAdj();
}

// 顯示比較級，並念原級＋比較級
function showAdjComparative() {
  if (currentAdjIndex === null) return;
  const a = adjectives[currentAdjIndex];
  const formsDiv = document.getElementById("adjForms");
  formsDiv.innerHTML = `
    <span><strong>Base</strong>: ${a.base}</span>
    <span><strong>Comparative</strong>: ${a.comp}</span>
  `;

  speakAdjPair();
}

// 念形容詞原級
function speakAdjBase() {
  if (currentAdjIndex === null) return;
  const a = adjectives[currentAdjIndex];

  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音合成（Web Speech API）。請換用 Safari 或 Chrome 測試。");
    return;
  }

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = a.base;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 念「原級＋比較級」一組
function speakAdjPair() {
  if (currentAdjIndex === null) return;
  const a = adjectives[currentAdjIndex];

  if (!("speechSynthesis" in window)) {
    console.warn("Web Speech API is not available on this browser.");
    return;
  }

  const text = `${a.base}, ${a.comp}`;

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = text;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 顯示 / 隱藏兩個練習卡片
function updateModeVisibility() {
  const chkVerbs = document.getElementById("chkVerbs");
  const chkComparatives = document.getElementById("chkComparatives");
  const verbsCard = document.getElementById("verbsCard");
  const comparativesCard = document.getElementById("comparativesCard");

  verbsCard.style.display = chkVerbs.checked ? "block" : "none";
  comparativesCard.style.display = chkComparatives.checked ? "block" : "none";
}

window.addEventListener("load", () => {
  // 綁定模式切換
  document.getElementById("chkVerbs").addEventListener("change", updateModeVisibility);
  document.getElementById("chkComparatives").addEventListener("change", updateModeVisibility);

  // 動詞三態按鈕
  document.getElementById("btnShowForms").addEventListener("click", showVerbForms);
  document.getElementById("btnSpeak").addEventListener("click", speakVerbBase);
  document.getElementById("btnNext").addEventListener("click", nextVerb);

  // 比較級按鈕
  document.getElementById("btnShowAdjComparative").addEventListener("click", showAdjComparative);
  document.getElementById("btnSpeakAdjBase").addEventListener("click", speakAdjBase);
  document.getElementById("btnNextAdj").addEventListener("click", nextAdj);

  // 初始顯示狀態
  updateModeVisibility();

  // 初始題目：三態