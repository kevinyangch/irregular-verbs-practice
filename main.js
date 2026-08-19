const STORAGE_KEY = "verb-practice-weakness-v1";
const MAX_WEIGHT = 5;
const RECENT_LIMIT = 3;

// AAA：Base = Past = PP
const aaaVerbs = [
  { base: "bet", past: "bet", pp: "bet", zh: "打賭" },
  { base: "burst", past: "burst", pp: "burst", zh: "爆裂" },
  { base: "cost", past: "cost", pp: "cost", zh: "花費" },
  { base: "cut", past: "cut", pp: "cut", zh: "切；割" },
  { base: "hit", past: "hit", pp: "hit", zh: "打；撞擊" },
  { base: "hurt", past: "hurt", pp: "hurt", zh: "受傷；傷害" },
  { base: "let", past: "let", pp: "let", zh: "讓；允許" },
  { base: "put", past: "put", pp: "put", zh: "放" },
  { base: "read", past: "read", pp: "read", zh: "閱讀" },
  { base: "set", past: "set", pp: "set", zh: "設定；放置" },
  { base: "shut", past: "shut", pp: "shut", zh: "關閉" }
];

// ABA：Base = PP，Past 不同
const abaVerbs = [
  { base: "become", past: "became", pp: "become", zh: "成為" },
  { base: "come", past: "came", pp: "come", zh: "來" },
  { base: "overcome", past: "overcame", pp: "overcome", zh: "克服" },
  { base: "run", past: "ran", pp: "run", zh: "跑" }
];

// ABB：Past = PP，Base 不同
const abbVerbs = [
  { base: "build", past: "built", pp: "built", zh: "建造" },
  { base: "buy", past: "bought", pp: "bought", zh: "買" },
  { base: "catch", past: "caught", pp: "caught", zh: "抓住" },
  { base: "deal", past: "dealt", pp: "dealt", zh: "處理；交易" },
  { base: "feel", past: "felt", pp: "felt", zh: "感覺" },
  { base: "find", past: "found", pp: "found", zh: "找到" },
  { base: "have", past: "had", pp: "had", zh: "有" },
  { base: "hear", past: "heard", pp: "heard", zh: "聽見" },
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

// ABC(1)：Base、Past、PP 都不同
const abc1Verbs = [
  { base: "be", past: "was/were", pp: "been", zh: "是；在" },
  { base: "begin", past: "began", pp: "begun", zh: "開始" },
  { base: "break", past: "broke", pp: "broken", zh: "打破" },
  { base: "choose", past: "chose", pp: "chosen", zh: "選擇" },
  { base: "do", past: "did", pp: "done", zh: "做" },
  { base: "draw", past: "drew", pp: "drawn", zh: "畫；拉" },
  { base: "drink", past: "drank", pp: "drunk", zh: "喝" },
  { base: "drive", past: "drove", pp: "driven", zh: "駕駛" },
  { base: "eat", past: "ate", pp: "eaten", zh: "吃" },
  { base: "fall", past: "fell", pp: "fallen", zh: "跌倒；落下" },
  { base: "fly", past: "flew", pp: "flown", zh: "飛" },
  { base: "forget", past: "forgot", pp: "forgotten", zh: "忘記" },
  { base: "forgive", past: "forgave", pp: "forgiven", zh: "原諒" },
  { base: "freeze", past: "froze", pp: "frozen", zh: "結冰" },
  { base: "give", past: "gave", pp: "given", zh: "給" },
  { base: "go", past: "went", pp: "gone", zh: "去" },
  { base: "grow", past: "grew", pp: "grown", zh: "成長；種植" },
  { base: "know", past: "knew", pp: "known", zh: "知道；認識" },
  { base: "ride", past: "rode", pp: "ridden", zh: "騎" },
  { base: "ring", past: "rang", pp: "rung", zh: "響鈴；打電話" },
  { base: "rise", past: "rose", pp: "risen", zh: "上升；起床" },
  { base: "see", past: "saw", pp: "seen", zh: "看見" },
  { base: "sing", past: "sang", pp: "sung", zh: "唱歌" },
  { base: "speak", past: "spoke", pp: "spoken", zh: "說話" },
  { base: "steal", past: "stole", pp: "stolen", zh: "偷" },
  { base: "swim", past: "swam", pp: "swum", zh: "游泳" },
  { base: "take", past: "took", pp: "taken", zh: "拿；帶" },
  { base: "throw", past: "threw", pp: "thrown", zh: "丟；投擲" },
  { base: "wear", past: "wore", pp: "worn", zh: "穿著" },
  { base: "write", past: "wrote", pp: "written", zh: "寫" }
];

// 比較級
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

const questionBanks = {
  aaa: aaaVerbs,
  aba: abaVerbs,
  abb: abbVerbs,
  abc1: abc1Verbs,
  comp: comparatives
};

const checkboxMap = {
  aaa: "optAAA",
  aba: "optABA",
  abb: "optABB",
  abc1: "optABC1",
  comp: "optComparatives"
};

let currentQuestion = null;
let currentType = null;
let roundMode = "coverage";
let coverageQueue = [];
let recentQuestionIds = [];
let weaknessData = loadWeaknessData();

function getQuestionId(type, item) {
  return `${type}:${item.base.toLowerCase()}`;
}

function loadWeaknessData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    return {};
  }
}

function saveWeaknessData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(weaknessData));
  } catch (error) {
    console.warn("無法儲存弱點資料。", error);
  }
}

function getWeight(type, item) {
  const id = getQuestionId(type, item);
  const value = Number(weaknessData[id] || 1);
  return Math.min(Math.max(value, 1), MAX_WEIGHT);
}

function setWeight(type, item, weight) {
  const id = getQuestionId(type, item);
  const safeWeight = Math.min(Math.max(weight, 1), MAX_WEIGHT);

  if (safeWeight <= 1) {
    delete weaknessData[id];
  } else {
    weaknessData[id] = safeWeight;
  }

  saveWeaknessData();
  updateWeakStatus();
}

function countWeakQuestions() {
  return Object.values(weaknessData).filter((weight) => Number(weight) > 1).length;
}

function getSelectedTypes() {
  return Object.entries(checkboxMap)
    .filter(([, checkboxId]) => {
      const checkbox = document.getElementById(checkboxId);
      return checkbox && checkbox.checked;
    })
    .map(([type]) => type);
}

function createCoverageQueue() {
  const selectedTypes = getSelectedTypes();
  const queue = [];

  selectedTypes.forEach((type) => {
    questionBanks[type].forEach((item, index) => {
      queue.push({ type, index });
    });
  });

  return shuffle(queue);
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getAllSelectedQuestions() {
  const selectedTypes = getSelectedTypes();
  const questions = [];

  selectedTypes.forEach((type) => {
    questionBanks[type].forEach((item, index) => {
      questions.push({ type, index, item });
    });
  });

  return questions;
}

function isRecent(question) {
  const id = getQuestionId(question.type, question.item);
  return recentQuestionIds.includes(id);
}

function updateRecentQuestions(question) {
  const id = getQuestionId(question.type, question.item);

  recentQuestionIds = recentQuestionIds.filter((questionId) => questionId !== id);
  recentQuestionIds.push(id);

  while (recentQuestionIds.length > RECENT_LIMIT) {
    recentQuestionIds.shift();
  }
}

function chooseWeightedReviewQuestion() {
  const allQuestions = getAllSelectedQuestions();

  if (allQuestions.length === 0) {
    return null;
  }

  let candidates = allQuestions.filter((question) => !isRecent(question));

  if (candidates.length === 0) {
    candidates = allQuestions;
  }

  const totalWeight = candidates.reduce((sum, question) => {
    return sum + getWeight(question.type, question.item);
  }, 0);

  let randomValue = Math.random() * totalWeight;

  for (const question of candidates) {
    randomValue -= getWeight(question.type, question.item);

    if (randomValue < 0) {
      return question;
    }
  }

  return candidates[candidates.length - 1];
}

function resetLearningRound(showMessage = false) {
  coverageQueue = createCoverageQueue();
  roundMode = "coverage";
  recentQuestionIds = [];

  if (showMessage) {
    setFeedback("已依目前勾選範圍建立新的完整學習輪。", "info");
  }

  updateRoundStatus();
}

function updateRoundStatus() {
  const statusEl = document.getElementById("roundStatus");

  if (!statusEl) {
    return;
  }

  if (roundMode === "coverage") {
    statusEl.textContent = `完整學習輪：剩餘 ${coverageQueue.length} 題`;
  } else {
    statusEl.textContent = "弱點加強複習中";
  }
}

function updateWeakStatus() {
  const weakStatusEl = document.getElementById("weakStatus");

  if (!weakStatusEl) {
    return;
  }

  weakStatusEl.textContent = `弱點題：${countWeakQuestions()}`;
}

function setFeedback(message = "", type = "") {
  const feedbackEl = document.getElementById("feedback");

  if (!feedbackEl) {
    return;
  }

  feedbackEl.textContent = message;
  feedbackEl.className = "feedback";

  if (type) {
    feedbackEl.classList.add(type);
  }
}

function renderCurrentQuestion() {
  const baseEl = document.getElementById("wordBase");
  const meaningEl = document.getElementById("wordMeaning");
  const formsEl = document.getElementById("forms");

  if (!currentQuestion || !currentType) {
    baseEl.textContent = "—";
    meaningEl.textContent = "請至少勾選一個題目範圍。";
    formsEl.textContent = "";
    return;
  }

  baseEl.textContent = currentQuestion.base;
  meaningEl.textContent = currentQuestion.zh;
  formsEl.textContent = "";
}

function nextQuestion() {
  const selectedTypes = getSelectedTypes();

  if (selectedTypes.length === 0) {
    currentQuestion = null;
    currentType = null;
    renderCurrentQuestion();
    updateRoundStatus();
    setFeedback("請至少勾選一個題目範圍。", "warning");
    return;
  }

  let selectedQuestion = null;

  if (roundMode === "coverage") {
    if (coverageQueue.length === 0) {
      roundMode = "review";
      setFeedback("已完成完整學習輪，現在進入弱點加強複習。", "success");
    } else {
      const next = coverageQueue.shift();

      selectedQuestion = {
        type: next.type,
        index: next.index,
        item: questionBanks[next.type][next.index]
      };
    }
  }

  if (!selectedQuestion) {
    selectedQuestion = chooseWeightedReviewQuestion();
  }

  if (!selectedQuestion) {
    return;
  }

  currentType = selectedQuestion.type;
  currentQuestion = selectedQuestion.item;

  updateRecentQuestions(selectedQuestion);
  renderCurrentQuestion();
  updateRoundStatus();

  if (roundMode === "coverage" && coverageQueue.length === 0) {
    setFeedback("這是完整學習輪的最後一題。下一題將進入弱點加強複習。", "info");
  } else if (roundMode === "review") {
    const weight = getWeight(currentType, currentQuestion);

    if (weight > 1) {
      setFeedback(`目前是弱點加強複習；此題權重為 ${weight}。`, "warning");
    } else {
      setFeedback("目前是弱點加強複習。", "info");
    }
  }
}

function showForms() {
  if (!currentQuestion || !currentType) {
    return;
  }

  const formsEl = document.getElementById("forms");

  if (currentType === "comp") {
    formsEl.innerHTML = `
      <span><strong>原形</strong>：${currentQuestion.base}</span>
      <span><strong>比較級</strong>：${currentQuestion.comp}</span>
    `;

    speakText(`${currentQuestion.base}, ${currentQuestion.comp}`);
    return;
  }

  formsEl.innerHTML = `
    <span><strong>原形</strong>：${currentQuestion.base}</span>
    <span><strong>過去式</strong>：${currentQuestion.past}</span>
    <span><strong>過去分詞</strong>：${currentQuestion.pp}</span>
  `;

  speakText(`${currentQuestion.base}, ${currentQuestion.past}, ${currentQuestion.pp}`);
}

function speakBase() {
  if (!currentQuestion) {
    return;
  }

  speakText(currentQuestion.base);
}

function speakText(text) {
  if (!("speechSynthesis" in window)) {
    setFeedback("此瀏覽器不支援語音合成。", "warning");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function markCurrentAsHard() {
  if (!currentQuestion || !currentType) {
    return;
  }

  const currentWeight = getWeight(currentType, currentQuestion);
  const newWeight = Math.min(currentWeight + 1, MAX_WEIGHT);

  setWeight(currentType, currentQuestion, newWeight);

  if (newWeight === currentWeight) {
    setFeedback(`「${currentQuestion.base}」已是最高弱點權重 ${MAX_WEIGHT}。`, "warning");
  } else {
    setFeedback(`已標記「${currentQuestion.base}」為弱點，權重：${newWeight}。`, "warning");
  }
}

function markCurrentAsEasy() {
  if (!currentQuestion || !currentType) {
    return;
  }

  const currentWeight = getWeight(currentType, currentQuestion);
  const newWeight = Math.max(currentWeight - 1, 1);

  setWeight(currentType, currentQuestion, newWeight);

  if (newWeight === 1) {
    setFeedback(`「${currentQuestion.base}」已恢復為一般權重。`, "success");
  } else {
    setFeedback(`「${currentQuestion.base}」弱點權重降為 ${newWeight}。`, "success");
  }
}

function resetWeaknessData() {
  const shouldReset = window.confirm("確定要清除所有弱點單字紀錄嗎？");

  if (!shouldReset) {
    return;
  }

  weaknessData = {};
  saveWeaknessData();
  updateWeakStatus();
  setFeedback("所有弱點單字紀錄已清除。", "success");
}

function handleOptionChange() {
  resetLearningRound(true);
  nextQuestion();
}

function bindEvents() {
  document.getElementById("btnSpeakBase").addEventListener("click", speakBase);
  document.getElementById("btnShowForms").addEventListener("click", showForms);
  document.getElementById("btnNext").addEventListener("click", nextQuestion);
  document.getElementById("btnMarkHard").addEventListener("click", markCurrentAsHard);
  document.getElementById("btnMarkEasy").addEventListener("click", markCurrentAsEasy);
  document.getElementById("btnResetWeak").addEventListener("click", resetWeaknessData);

  Object.values(checkboxMap).forEach((checkboxId) => {
    document.getElementById(checkboxId).addEventListener("change", handleOptionChange);
  });
}

window.addEventListener("load", () => {
  bindEvents();
  updateWeakStatus();
  resetLearningRound();
  nextQuestion();
});