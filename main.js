// 題庫：不規則動詞三態 + 中文
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

// 題庫：形容詞比較級 + 中文
const comparatives = [
  { base: "fast", comp: "faster", zh: "快的 → 更快的" },
  { base: "big", comp: "bigger", zh: "大的 → 更大的" },
  { base: "happy", comp: "happier", zh: "快樂的 → 更快樂的" },
  { base: "interesting", comp: "more interesting", zh: "有趣的 → 更有趣的" },
  { base: "slow", comp: "slower", zh: "慢的 → 更慢的" },
  { base: "hot", comp: "hotter", zh: "熱的 → 更熱的" },
  { base: "easy", comp: "easier", zh: "容易的 → 更容易的" },
  { base: "expensive", comp: "more expensive", zh: "昂貴的 → 更昂貴的" }
];

let currentIndex = null;
let currentType = null; // "verb" 或 "comp"

// 依 checkbox 選擇題目類型
function pickRandomType() {
  const useVerbs = document.getElementById("optVerbs").checked;
  const useComps = document.getElementById("optComparatives").checked;

  const types = [];
  if (useVerbs) types.push("verb");
  if (useComps) types.push("comp");

  if (types.length === 0) {
    // 若都沒勾選，預設用 verbs
    return "verb";
  }

  const idx = Math.floor(Math.random() * types.length);
  return types[idx];
}

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function renderCurrent() {
  const baseEl = document.getElementById("wordBase");
  const meaningEl = document.getElementById("wordMeaning");
  const formsEl = document.getElementById("forms");

  if (currentType === "verb") {
    const v = verbs[currentIndex];
    baseEl.textContent = v.base;
    meaningEl.textContent = v.zh;
  } else if (currentType === "comp") {
    const a = comparatives[currentIndex];
    baseEl.textContent = a.base;
    meaningEl.textContent = a.zh;
  } else {
    baseEl.textContent = "—";
    meaningEl.textContent = "請勾選題目範圍後，按「下一題」開始練習。";
  }

  formsEl.textContent = "";
}

function nextWord() {
  currentType = pickRandomType();

  if (currentType === "verb") {
    let newIndex = randomIndex(verbs.length);
    if (currentIndex !== null && verbs.length > 1) {
      while (newIndex === currentIndex) {
        newIndex = randomIndex(verbs.length);
      }
    }
    currentIndex = newIndex;
  } else if (currentType === "comp") {
    let newIndex = randomIndex(comparatives.length);
    if (currentIndex !== null && comparatives.length > 1) {
      while (newIndex === currentIndex) {
        newIndex = randomIndex(comparatives.length);
      }
    }
    currentIndex = newIndex;
  } else {
    currentIndex = null;
  }

  renderCurrent();
}

// 顯示三態／比較級，並自動念完整形式
function showForms() {
  if (currentIndex === null || !currentType) return;
  const formsDiv = document.getElementById("forms");

  if (currentType === "verb") {
    const v = verbs[currentIndex];
    formsDiv.innerHTML = `
      <span><strong>Base</strong>: ${v.base}</span>
      <span><strong>Past</strong>: ${v.past}</span>
      <span><strong>PP</strong>: ${v.pp}</span>
    `;
    speakVerbForms();
  } else if (currentType === "comp") {
    const a = comparatives[currentIndex];
    formsDiv.innerHTML = `
      <span><strong>Base</strong>: ${a.base}</span>
      <span><strong>Comparative</strong>: ${a.comp}</span>
    `;
    speakComparativeForms();
  }
}

// 確認發音(原形)：只念 Base
function speakBase() {
  if (currentIndex === null || !currentType) return;

  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音合成（Web Speech API）。請換用 Chrome 或 Safari 測試。");
    return;
  }

  const text =
    currentType === "verb"
      ? verbs[currentIndex].base
      : comparatives[currentIndex].base;

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = text;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 不規則動詞：念 Base, Past, PP
function speakVerbForms() {
  if (currentIndex === null || currentType !== "verb") return;
  if (!("speechSynthesis" in window)) return;

  const v = verbs[currentIndex];
  const text = `${v.base}, ${v.past}, ${v.pp}`;

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = text;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 比較級：念 Base, Comparative
function speakComparativeForms() {
  if (currentIndex === null || currentType !== "comp") return;
  if (!("speechSynthesis" in window)) return;

  const a = comparatives[currentIndex];
  const text = `${a.base}, ${a.comp}`;

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = text;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

window.addEventListener("load", () => {
  // 按鈕事件
  const btnSpeakBase = document.getElementById("btnSpeakBase");
  const btnShowForms = document.getElementById("btnShowForms");
  const btnNext = document.getElementById("btnNext");

  if (btnSpeakBase) {
    btnSpeakBase.addEventListener("click", speakBase);
  }
  if (btnShowForms) {
    btnShowForms.addEventListener("click", showForms);
  }
  if (btnNext) {
    btnNext.addEventListener("click", nextWord);
  }

  // 題目範圍變更時，重新出題
  const optVerbs = document.getElementById("optVerbs");
  const optComparatives = document.getElementById("optComparatives");

  if (optVerbs) {
    optVerbs.addEventListener("change", nextWord);
  }
  if (optComparatives) {
    optComparatives.addEventListener("change", nextWord);
  }

  // 初次載入先出一題
  nextWord();
});