// 題庫：AAA 三態同型
const verbsAAA = [
  { base: "cost", past: "cost", pp: "cost", zh: "花費" },
  { base: "cut", past: "cut", pp: "cut", zh: "切割" },
  { base: "fit", past: "fit", pp: "fit", zh: "合身" },
  { base: "hit", past: "hit", pp: "hit", zh: "碰撞" },
  { base: "hurt", past: "hurt", pp: "hurt", zh: "傷害" },
  { base: "let", past: "let", pp: "let", zh: "讓" },
  { base: "put", past: "put", pp: "put", zh: "放置" },
  { base: "quit", past: "quit", pp: "quit", zh: "放棄" },
  { base: "read", past: "read", pp: "read", zh: "閱讀" }, // 發音不同，但字型同
  { base: "set", past: "set", pp: "set", zh: "擺放" },
  { base: "shut", past: "shut", pp: "shut", zh: "關閉" },
  { base: "spread", past: "spread", pp: "spread", zh: "傳開" }
];

// 題庫：ABA 原型與過去分詞同型
const verbsABA = [
  { base: "become", past: "became", pp: "become", zh: "變成" },
  { base: "come", past: "came", pp: "come", zh: "來" },
  { base: "run", past: "ran", pp: "run", zh: "跑步" }
];

// 題庫：ABB 過去式與過去分詞同型
const verbsABB = [
  { base: "bend", past: "bent", pp: "bent", zh: "彎曲" },
  { base: "bring", past: "brought", pp: "brought", zh: "帶來" },
  { base: "build", past: "built", pp: "built", zh: "建築；建造" },
  { base: "burn", past: "burnt", pp: "burnt", zh: "燃燒；燒焦" },
  { base: "buy", past: "bought", pp: "bought", zh: "買" },
  { base: "catch", past: "caught", pp: "caught", zh: "抓到；接到" },
  { base: "deal", past: "dealt", pp: "dealt", zh: "處理" },
  { base: "dig", past: "dug", pp: "dug", zh: "挖" },
  { base: "dive", past: "dove", pp: "dove", zh: "潛水" },
  { base: "feed", past: "fed", pp: "fed", zh: "餵" },
  { base: "feel", past: "felt", pp: "felt", zh: "感覺" },
  { base: "fight", past: "fought", pp: "fought", zh: "打仗；打架" },
  { base: "find", past: "found", pp: "found", zh: "找到" },
  { base: "get", past: "got", pp: "got", zh: "得到" },
  { base: "hang", past: "hung", pp: "hung", zh: "懸掛" },
  { base: "hang", past: "hanged", pp: "hanged", zh: "吊死" },
  { base: "have", past: "had", pp: "had", zh: "有；吃" },
  { base: "hear", past: "heard", pp: "heard", zh: "聽到" },
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
let currentType = null; // "AAA" / "ABA" / "ABB" / "comp"

// 最近題目避免重複
const recentIndices = {
  AAA: [],
  ABA: [],
  ABB: [],
  comp: []
};
const RECENT_LIMIT = 3;

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

// 根據 checkbox 選題型
function pickRandomType() {
  const useAAA = document.getElementById("optAAA").checked;
  const useABA = document.getElementById("optABA").checked;
  const useABB = document.getElementById("optABB").checked;
  const useComp = document.getElementById("optComparatives").checked;

  const types = [];
  if (useAAA) types.push("AAA");
  if (useABA) types.push("ABA");
  if (useABB) types.push("ABB");
  if (useComp) types.push("comp");

  if (types.length === 0) {
    // 若全部沒勾選，預設 AAA
    return "AAA";
  }

  const idx = Math.floor(Math.random() * types.length);
  return types[idx];
}

// 避免連續重複的選題（非加權版本）
function pickIndexAvoidRecent(list, typeKey) {
  const recent = recentIndices[typeKey] || [];
  const candidates = [];

  for (let i = 0; i < list.length; i++) {
    if (!recent.includes(i)) {
      candidates.push(i);
    }
  }

  if (candidates.length === 0) {
    // 全部都在 recent 裡，清空緩衝再選
    recentIndices[typeKey] = [];
    return randomIndex(list.length);
  }

  const r = Math.floor(Math.random() * candidates.length);
  const chosen = candidates[r];

  recent.push(chosen);
  while (recent.length > RECENT_LIMIT) {
    recent.shift();
  }
  recentIndices[typeKey] = recent;

  return chosen;
}

function renderCurrent() {
  const baseEl = document.getElementById("wordBase");
  const meaningEl = document.getElementById("wordMeaning");
  const formsEl = document.getElementById("forms");

  let item = null;

  if (currentType === "AAA") {
    item = verbsAAA[currentIndex];
  } else if (currentType === "ABA") {
    item = verbsABA[currentIndex];
  } else if (currentType === "ABB") {
    item = verbsABB[currentIndex];
  } else if (currentType === "comp") {
    item = comparatives[currentIndex];
  }

  if (!item) {
    baseEl.textContent = "—";
    meaningEl.textContent = "請勾選題目範圍後，按「下一題」開始練習。";
    formsEl.textContent = "";
    return;
  }

  baseEl.textContent = item.base;
  meaningEl.textContent =
    currentType === "comp" ? item.zh : item.zh;
  formsEl.textContent = "";
}

function nextWord() {
  currentType = pickRandomType();

  if (currentType === "AAA") {
    currentIndex = pickIndexAvoidRecent(verbsAAA, "AAA");
  } else if (currentType === "ABA") {
    currentIndex = pickIndexAvoidRecent(verbsABA, "ABA");
  } else if (currentType === "ABB") {
    currentIndex = pickIndexAvoidRecent(verbsABB, "ABB");
  } else if (currentType === "comp") {
    currentIndex = pickIndexAvoidRecent(comparatives, "comp");
  } else {
    currentIndex = null;
  }

  renderCurrent();
}

// 顯示三態／比較級 + 自動念完整形式
function showForms() {
  if (currentIndex === null || !currentType) return;
  const formsDiv = document.getElementById("forms");

  if (currentType === "AAA") {
    const v = verbsAAA[currentIndex];
    formsDiv.innerHTML = `
      <span><strong>Base</strong>: ${v.base}</span>
      <span><strong>Past</strong>: ${v.past}</span>
      <span><strong>PP</strong>: ${v.pp}</span>
    `;
    speakVerbForms(v);
  } else if (currentType === "ABA") {
    const v = verbsABA[currentIndex];
    formsDiv.innerHTML = `
      <span><strong>Base</strong>: ${v.base}</span>
      <span><strong>Past</strong>: ${v.past}</span>
      <span><strong>PP</strong>: ${v.pp}</span>
    `;
    speakVerbForms(v);
  } else if (currentType === "ABB") {
    const v = verbsABB[currentIndex];
    formsDiv.innerHTML = `
      <span><strong>Base</strong>: ${v.base}</span>
      <span><strong>Past</strong>: ${v.past}</span>
      <span><strong>PP</strong>: ${v.pp}</span>
    `;
    speakVerbForms(v);
  } else if (currentType === "comp") {
    const a = comparatives[currentIndex];
    formsDiv.innerHTML = `
      <span><strong>Base</strong>: ${a.base}</span>
      <span><strong>Comparative</strong>: ${a.comp}</span>
    `;
    speakComparativeForms(a);
  }
}

// 確認發音(原形)：只念 Base
function speakBase() {
  if (currentIndex === null || !currentType) return;

  if (!("speechSynthesis" in window)) {
    alert("此瀏覽器不支援語音合成（Web Speech API）。請換用 Chrome 或 Safari 測試。");
    return;
  }

  let base = "";

  if (currentType === "AAA") {
    base = verbsAAA[currentIndex].base;
  } else if (currentType === "ABA") {
    base = verbsABA[currentIndex].base;
  } else if (currentType === "ABB") {
    base = verbsABB[currentIndex].base;
  } else if (currentType === "comp") {
    base = comparatives[currentIndex].base;
  }

  const u = new SpeechSynthesisUtterance();
  u.lang = "en-US";
  u.text = base;
  u.rate = 0.9;
  u.pitch = 1.0;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

// 三態：念 Base, Past, PP
function speakVerbForms(v) {
  if (!v) return;
  if (!("speechSynthesis" in window)) return;

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
function speakComparativeForms(a) {
  if (!a) return;
  if (!("speechSynthesis" in window)) return;

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
  const btnSpeakBase = document.getElementById("btnSpeakBase");
  const btnShowForms = document.getElementById("btnShowForms");
  const btnNext = document.getElementById("btnNext");

  if (btnSpeakBase) btnSpeakBase.addEventListener("click", speakBase);
  if (btnShowForms) btnShowForms.addEventListener("click", showForms);
  if (btnNext) btnNext.addEventListener("click", nextWord);

  const optAAA = document.getElementById("optAAA");
  const optABA = document.getElementById("optABA");
  const optABB = document.getElementById("optABB");
  const optComparatives = document.getElementById("optComparatives");

  if (optAAA) optAAA.addEventListener("change", nextWord);
  if (optABA) optABA.addEventListener("change", nextWord);
  if (optABB) optABB.addEventListener("change", nextWord);
  if (optComparatives) optComparatives.addEventListener("change", nextWord);

  nextWord();
});