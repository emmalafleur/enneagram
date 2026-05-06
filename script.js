const enneagramQuestions = [
  [1, "Aku sering merasa perlu memperbaiki sesuatu agar sesuai standar yang benar."],
  [2, "Aku merasa berarti saat bisa membantu orang merasa diperhatikan."],
  [3, "Aku terdorong untuk menunjukkan hasil yang bisa dilihat dan dihargai."],
  [4, "Aku sering merasa pengalaman batinku lebih kompleks daripada yang terlihat."],
  [5, "Aku butuh memahami sesuatu secara mendalam sebelum merasa siap terlibat."],
  [6, "Aku cenderung memikirkan risiko sebelum mengambil keputusan."],
  [7, "Aku mencari pilihan baru saat hidup mulai terasa terlalu sempit."],
  [8, "Aku lebih nyaman bersikap tegas daripada terlihat mudah dikendalikan."],
  [9, "Aku sering menjaga suasana agar tetap damai dan tidak terlalu panas."],
  [1, "Kesalahan kecil bisa menggangguku jika sebenarnya bisa dicegah."],
  [2, "Aku mudah menangkap kebutuhan orang lain bahkan saat mereka tidak bilang."],
  [3, "Aku cepat menyesuaikan diri dengan ekspektasi agar performaku kuat."],
  [4, "Aku ingin hidup terasa autentik, bukan sekadar aman atau biasa saja."],
  [5, "Terlalu banyak tuntutan sosial bisa membuat energiku cepat habis."],
  [6, "Aku merasa tenang jika sudah punya rencana cadangan."],
  [7, "Aku lebih suka bergerak ke kemungkinan menarik daripada terjebak masalah lama."],
  [8, "Aku protektif terhadap orang yang kuanggap dekat."],
  [9, "Aku bisa menunda pendapat pribadi supaya hubungan tetap nyaman."],
  [1, "Aku punya suara batin yang cukup kuat tentang benar dan salah."],
  [2, "Aku kadang berharap orang menyadari bantuanku tanpa perlu kuminta."],
  [3, "Aku tidak suka terlihat gagal atau tidak kompeten."],
  [4, "Aku mudah membandingkan hidupku dengan sesuatu yang terasa lebih ideal."],
  [5, "Aku suka menjaga ruang pribadi agar pikiranku tetap jernih."],
  [6, "Kepercayaan terasa penting, tapi aku tidak memberikannya sembarangan."],
  [7, "Aku cepat mencari distraksi saat merasa tertekan atau dibatasi."],
  [8, "Aku menghargai orang yang bicara langsung dan tidak berputar-putar."],
  [9, "Aku sering melihat banyak sisi sehingga sulit memilih satu posisi."],
  [1, "Aku ingin menjadi pribadi yang bertanggung jawab dan tidak ceroboh."],
  [2, "Aku merasa dekat dengan orang lewat perhatian dan dukungan praktis."],
  [3, "Aku termotivasi oleh target yang jelas dan pengakuan atas usaha."],
  [4, "Aku sering mencari kata, musik, atau suasana yang cocok dengan perasaanku."],
  [5, "Aku lebih suka mengamati dulu sebelum masuk ke situasi baru."],
  [6, "Aku cukup sensitif terhadap tanda-tanda bahwa sesuatu mungkin tidak aman."],
  [7, "Aku punya banyak ide dan kadang ingin menjalankan semuanya."],
  [8, "Aku tidak suka saat orang menghindari konflik yang perlu dibereskan."],
  [9, "Aku mudah masuk ke ritme orang lain agar semuanya terasa lancar."],
  [1, "Aku merasa puas saat sesuatu tertata, bersih, dan selesai dengan baik."],
  [2, "Aku takut dianggap tidak dibutuhkan oleh orang-orang yang penting bagiku."],
  [3, "Aku bisa menekan perasaan pribadi demi tetap produktif."],
  [4, "Aku takut menjadi biasa saja atau kehilangan keunikan diriku."],
  [5, "Aku takut kehabisan energi, waktu, atau kapasitas untuk menghadapi tuntutan."],
  [6, "Aku ingin orang dan sistem yang bisa diandalkan."],
  [7, "Aku takut kehilangan kebebasan atau terjebak dalam rasa sakit terlalu lama."],
  [8, "Aku takut terlihat lemah di depan orang yang bisa memanfaatkanku."],
  [9, "Aku takut konflik membuatku kehilangan koneksi atau ketenangan."]
];

const instinctQuestions = [
  ["sp", "Aku sering memperhatikan kenyamanan tubuh, uang, waktu, dan energi pribadiku."],
  ["sx", "Aku tertarik pada koneksi yang intens, personal, dan terasa penuh daya tarik."],
  ["so", "Aku peka terhadap dinamika kelompok, reputasi, dan posisi dalam komunitas."],
  ["sp", "Aku merasa tenang saat kebutuhan dasar dan rutinitas hidupku terkendali."],
  ["sx", "Aku cepat merasa hidup saat ada chemistry kuat dengan seseorang atau sebuah minat."],
  ["so", "Aku suka memahami peran orang-orang dan bagaimana sebuah lingkaran sosial bekerja."],
  ["sp", "Aku mudah cemas jika sumber daya, kesehatan, atau ruang pribadiku terasa terancam."],
  ["sx", "Aku mencari pengalaman yang membuatku merasa benar-benar terhubung dan menyala."],
  ["so", "Aku sering memikirkan bagaimana tindakanku berdampak pada kelompok atau jaringan."],
  ["sp", "Aku cenderung membangun rasa aman lewat kebiasaan, tabungan, atau lingkungan yang nyaman."],
  ["sx", "Aku lebih memilih sedikit hubungan yang intens daripada banyak hubungan yang datar."],
  ["so", "Aku memperhatikan apakah aku diterima, dibutuhkan, atau punya kontribusi di komunitas."],
  ["sp", "Aku bisa sangat protektif terhadap waktu istirahat dan kapasitas pribadiku."],
  ["sx", "Aku mudah terdorong oleh rasa penasaran yang kuat terhadap orang, ide, atau pengalaman tertentu."],
  ["so", "Aku suka menjadi bagian dari sesuatu yang lebih besar daripada diriku sendiri."],
  ["sp", "Saat stres, aku biasanya kembali ke hal praktis: makan, tidur, tempat, uang, dan jadwal."],
  ["sx", "Saat stres, aku mencari sesuatu yang terasa intens agar tidak mati rasa."],
  ["so", "Saat stres, aku menilai ulang hubungan, status, atau rasa tempatku di antara orang lain."]
];

const enneagramWeights = [1, 1.12, 0.94, 1.08, 0.98];
const instinctWeights = [1, 1.08, 0.94, 1.12, 0.98, 1.04];
const questionBank = [
  ...enneagramQuestions.map(([type, text], index) => ({
    kind: "enneagram",
    type,
    text,
    weight: enneagramWeights[Math.floor(index / 9)]
  })),
  ...instinctQuestions.map(([instinct, text], index) => ({
    kind: "instinct",
    instinct,
    text,
    weight: instinctWeights[Math.floor(index / 3)]
  }))
];

const typeInfo = {
  1: ["The Reformer", "Tipe 1 digerakkan oleh keinginan menjadi baik, benar, dan bertanggung jawab. Kekuatanmu ada pada integritas, ketelitian, dan kemampuan melihat apa yang perlu diperbaiki."],
  2: ["The Helper", "Tipe 2 digerakkan oleh kebutuhan untuk mencintai dan dicintai lewat dukungan nyata. Kekuatanmu ada pada kehangatan, perhatian, dan kepekaan terhadap kebutuhan orang lain."],
  3: ["The Achiever", "Tipe 3 digerakkan oleh pencapaian, efektivitas, dan citra kompeten. Kekuatanmu ada pada adaptasi, fokus target, dan kemampuan membuat sesuatu terlihat berhasil."],
  4: ["The Individualist", "Tipe 4 digerakkan oleh pencarian identitas, kedalaman, dan keaslian. Kekuatanmu ada pada sensitivitas, kreativitas, dan keberanian merasakan hal yang kompleks."],
  5: ["The Investigator", "Tipe 5 digerakkan oleh kebutuhan memahami dan menjaga kapasitas diri. Kekuatanmu ada pada observasi, analisis, dan kemampuan melihat struktur yang tidak tampak."],
  6: ["The Loyalist", "Tipe 6 digerakkan oleh keamanan, kepercayaan, dan kesiapan menghadapi risiko. Kekuatanmu ada pada loyalitas, kewaspadaan, dan kemampuan membaca potensi masalah."],
  7: ["The Enthusiast", "Tipe 7 digerakkan oleh kebebasan, pilihan, dan pengalaman baru. Kekuatanmu ada pada optimisme, ide segar, dan kemampuan membuka jalan saat suasana terasa buntu."],
  8: ["The Challenger", "Tipe 8 digerakkan oleh kemandirian, kekuatan, dan perlindungan. Kekuatanmu ada pada keberanian, kejujuran langsung, dan energi untuk menghadapi hal sulit."],
  9: ["The Peacemaker", "Tipe 9 digerakkan oleh harmoni, kestabilan, dan rasa terhubung. Kekuatanmu ada pada ketenangan, penerimaan, dan kemampuan menyatukan sudut pandang berbeda."]
};

const wings = {
  1: [9, 2],
  2: [1, 3],
  3: [2, 4],
  4: [3, 5],
  5: [4, 6],
  6: [5, 7],
  7: [6, 8],
  8: [7, 9],
  9: [8, 1]
};

const instinctInfo = {
  sp: ["Self-preservation", "fokus pada keamanan, tubuh, sumber daya, kenyamanan, dan kestabilan hidup sehari-hari"],
  sx: ["Sexual / One-to-one", "fokus pada intensitas, daya tarik, chemistry, dan koneksi personal yang terasa hidup"],
  so: ["Social", "fokus pada kelompok, kontribusi, reputasi, jaringan, dan rasa menjadi bagian dari sesuatu"]
};

const state = {
  index: 0,
  answers: [],
  questions: []
};

const introView = document.querySelector("#intro-view");
const quizView = document.querySelector("#quiz-view");
const resultView = document.querySelector("#result-view");
const progressCount = document.querySelector("#progress-count");
const progressType = document.querySelector("#progress-type");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const questionKicker = document.querySelector("#question-kicker");
const answeredCount = document.querySelector("#answered-count");
const backButton = document.querySelector("#back-button");
const scaleButtons = document.querySelectorAll(".scale-button");
const resultType = document.querySelector("#result-type");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const resultWing = document.querySelector("#result-wing");
const scoreChart = document.querySelector("#score-chart");
const resultInstinct = document.querySelector("#result-instinct");
const themeButton = document.querySelector("#theme-button");
const storyCard = document.querySelector("#story-card");
const downloadButton = document.querySelector("#download-button");
const instagramButton = document.querySelector("#instagram-button");
const facebookButton = document.querySelector("#facebook-button");
const whatsappButton = document.querySelector("#whatsapp-button");
const pageUrl = "https://emmalafleur.github.io/enneagram/";
let latestResult = null;

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#reset-button").addEventListener("click", resetQuiz);
document.querySelector("#retake-button").addEventListener("click", resetQuiz);
document.querySelector("#copy-button").addEventListener("click", copyResult);
themeButton.addEventListener("click", toggleTheme);
downloadButton.addEventListener("click", downloadStoryCard);
instagramButton.addEventListener("click", shareToInstagram);
facebookButton.addEventListener("click", shareToFacebook);
whatsappButton.addEventListener("click", shareToWhatsApp);
backButton.addEventListener("click", goBack);

scaleButtons.forEach((button) => {
  button.addEventListener("click", () => answerQuestion(Number(button.dataset.score)));
});

applyTheme(localStorage.getItem("theme") || "light");

function startQuiz() {
  state.index = 0;
  state.answers = [];
  state.questions = shuffleQuestions(questionBank);
  introView.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.index];
  const currentAnswer = state.answers[state.index];
  const phaseLabel = question.kind === "enneagram" ? "Enneagram" : "Instinct";

  questionText.textContent = question.text;
  questionKicker.textContent = question.kind === "enneagram" ? "Nilai 1-5" : "Instinct sp/sx/so";
  progressType.textContent = phaseLabel;
  progressCount.textContent = `${state.index + 1}/${state.questions.length}`;
  progressFill.style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  answeredCount.textContent = state.answers.length ? `${state.answers.length} jawaban tersimpan` : "Belum ada jawaban";
  backButton.disabled = state.index === 0;

  scaleButtons.forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.score) === currentAnswer);
  });
}

function answerQuestion(score) {
  state.answers[state.index] = score;

  if (state.index === state.questions.length - 1) {
    progressFill.style.width = "100%";
    showResult();
    return;
  }

  state.index += 1;
  renderQuestion();
}

function goBack() {
  if (state.index === 0) return;
  state.index -= 1;
  renderQuestion();
}

function resetQuiz() {
  state.index = 0;
  state.answers = [];
  state.questions = [];
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  introView.classList.remove("hidden");
}

function calculateScores() {
  const scores = Object.fromEntries(Array.from({ length: 9 }, (_, index) => [index + 1, 0]));
  const weights = Object.fromEntries(Array.from({ length: 9 }, (_, index) => [index + 1, 0]));

  state.questions.forEach((question, index) => {
    if (question.kind === "enneagram") {
      scores[question.type] += (state.answers[index] || 1) * question.weight;
      weights[question.type] += question.weight;
    }
  });

  return Object.fromEntries(Object.entries(scores).map(([type, score]) => [type, score / weights[type]]));
}

function calculateInstinctScores() {
  const scores = { sp: 0, sx: 0, so: 0 };
  const weights = { sp: 0, sx: 0, so: 0 };

  state.questions.forEach((question, index) => {
    if (question.kind === "instinct") {
      scores[question.instinct] += (state.answers[index] || 1) * question.weight;
      weights[question.instinct] += question.weight;
    }
  });

  return Object.fromEntries(Object.entries(scores).map(([instinct, score]) => [instinct, score / weights[instinct]]));
}

function showResult() {
  const scores = calculateScores();
  const instinctScores = calculateInstinctScores();
  const sorted = Object.entries(scores)
    .map(([type, score]) => ({ type: Number(type), score }))
    .sort((a, b) => b.score - a.score || a.type - b.type);
  const primary = sorted[0].type;
  const wing = getWing(primary, scores);
  const instinctStack = getInstinctStack(instinctScores);
  const [title, description] = typeInfo[primary];
  latestResult = { primary, wing, instinctStack, title, description };

  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  resultType.textContent = `Type ${primary} ${instinctStack[0]}/${instinctStack[1]}`;
  resultTitle.textContent = title;
  resultDescription.textContent = description;
  resultWing.textContent = `Kemungkinan wing: ${primary}w${wing}. Wing dipilih dari tipe tetangga dengan skor tertinggi.`;
  resultInstinct.textContent = `Dominan ${instinctStack[0].toUpperCase()} berarti ${instinctInfo[instinctStack[0]][1]}.`;
  renderChart(scores, instinctScores);
  renderStoryCard(latestResult);
}

function getWing(primary, scores) {
  const [left, right] = wings[primary];
  return scores[left] >= scores[right] ? left : right;
}

function getInstinctStack(scores) {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([instinct]) => instinct);
}

function renderChart(scores, instinctScores) {
  scoreChart.innerHTML = "";
  const topScores = Object.values(scores).sort((a, b) => b - a);

  if (topScores[0] - topScores[1] <= 0.18) {
    const notice = document.createElement("p");
    notice.className = "chart-note";
    notice.textContent = "Skor teratas dekat. Baca hasil ini sebagai kandidat utama, bukan kepastian.";
    scoreChart.appendChild(notice);
  }

  const typeHeading = document.createElement("h3");
  typeHeading.textContent = "Skor Enneagram";
  scoreChart.appendChild(typeHeading);

  Object.entries(scores)
    .sort((a, b) => b[1] - a[1] || Number(a[0]) - Number(b[0]))
    .forEach(([type, score]) => {
    const percent = ((score - 1) / 4) * 100;
    const [title] = typeInfo[type];
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-label">
        <span>Type ${type} ${title}</span>
        <span>${percent.toFixed(1)}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${Math.max(percent, 2).toFixed(2)}%"></div>
      </div>
    `;
    scoreChart.appendChild(row);
  });

  const instinctHeading = document.createElement("h3");
  instinctHeading.className = "chart-heading";
  instinctHeading.textContent = "Instinct sp/sx/so";
  scoreChart.appendChild(instinctHeading);

  Object.entries(instinctScores)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(([instinct, score]) => {
    const percent = ((score - 1) / 4) * 100;
    const [title] = instinctInfo[instinct];
    const row = document.createElement("div");
    row.className = "bar-row instinct-row";
    row.innerHTML = `
      <div class="bar-label">
        <span>${instinct.toUpperCase()} ${title}</span>
        <span>${percent.toFixed(1)}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill instinct-fill" style="width:${Math.max(percent, 2).toFixed(2)}%"></div>
      </div>
    `;
    scoreChart.appendChild(row);
  });
}

function shuffleQuestions(items) {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "Light" : "Dark";
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
}

async function copyResult() {
  const text = `${resultType.textContent} - ${resultTitle.textContent}\n${resultDescription.textContent}\n${resultWing.textContent}\n${resultInstinct.textContent}`;
  const button = document.querySelector("#copy-button");

  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Tersalin";
  } catch {
    button.textContent = "Gagal menyalin";
  }

  window.setTimeout(() => {
    button.textContent = "Salin hasil";
  }, 1400);
}

function renderStoryCard(result) {
  const canvas = storyCard;
  const ctx = canvas.getContext("2d");
  const { primary, wing, instinctStack, title } = result;
  const accent = getInstinctAccent(instinctStack[0]);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground(ctx, accent);
  drawPanel(ctx, 92, 116, 896, 1550, 48);

  ctx.fillStyle = "#eae5dc";
  ctx.font = "700 34px Segoe UI, Arial, sans-serif";
  ctx.fillText("ENNEAGRAM RESULT", 148, 210);

  ctx.fillStyle = accent;
  ctx.fillRect(148, 245, 124, 6);

  drawStorySection(ctx, {
    y: 322,
    label: "CORE TYPE",
    main: `type ${primary}`,
    sub: title,
    accent
  });

  drawStoryDivider(ctx, 690);

  drawStorySection(ctx, {
    y: 770,
    label: "WING",
    main: `${primary}w${wing}`,
    sub: getWingLabel(primary, wing),
    accent
  });

  drawStoryDivider(ctx, 1138);

  drawStorySection(ctx, {
    y: 1218,
    label: "INSTINCTUAL STACK",
    main: `${instinctStack[0]}/${instinctStack[1]}`,
    sub: `${instinctInfo[instinctStack[0]][0]} + ${instinctInfo[instinctStack[1]][0]}`,
    accent
  });

  ctx.fillStyle = "rgba(234, 229, 220, 0.7)";
  ctx.font = "600 30px Segoe UI, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(pageUrl.replace("https://", ""), 540, 1814);
  ctx.textAlign = "left";
}

function drawBackground(ctx, accent) {
  const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
  gradient.addColorStop(0, "#0d1210");
  gradient.addColorStop(0.55, "#171d19");
  gradient.addColorStop(1, "#0b0f0d");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.globalAlpha = 0.14;
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(875, 290, 270, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(180, 1660, 330, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawPanel(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fillStyle = "rgba(255, 250, 241, 0.045)";
  ctx.fill();
  ctx.strokeStyle = "rgba(234, 229, 220, 0.18)";
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawStorySection(ctx, section) {
  ctx.fillStyle = section.accent;
  ctx.font = "800 30px Segoe UI, Arial, sans-serif";
  ctx.fillText(section.label, 148, section.y);

  ctx.fillStyle = "#f7f2e8";
  ctx.font = "900 132px Segoe UI, Arial, sans-serif";
  ctx.fillText(section.main, 148, section.y + 172);

  ctx.fillStyle = "rgba(247, 242, 232, 0.68)";
  ctx.font = "500 40px Segoe UI, Arial, sans-serif";
  wrapCanvasText(ctx, section.sub, 150, section.y + 294, 780, 54);
}

function drawStoryDivider(ctx, y) {
  ctx.strokeStyle = "rgba(234, 229, 220, 0.16)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(148, y);
  ctx.lineTo(932, y);
  ctx.stroke();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";

  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word;
    if (ctx.measureText(nextLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = nextLine;
    }
  });

  ctx.fillText(line, x, y);
}

function getInstinctAccent(instinct) {
  return {
    sp: "#6fd3a2",
    sx: "#ef6f86",
    so: "#78a8f4"
  }[instinct] || "#6fd3a2";
}

function getWingLabel(primary, wing) {
  const wingNames = {
    "1w9": "Principled, calm, self-contained",
    "1w2": "Principled, warm, helpful",
    "2w1": "Caring, responsible, sincere",
    "2w3": "Caring, expressive, ambitious",
    "3w2": "Driven, charming, people-aware",
    "3w4": "Driven, refined, identity-aware",
    "4w3": "Expressive, polished, image-aware",
    "4w5": "Expressive, introspective, cerebral",
    "5w4": "Analytical, imaginative, private",
    "5w6": "Analytical, cautious, systematic",
    "6w5": "Loyal, observant, prepared",
    "6w7": "Loyal, lively, connected",
    "7w6": "Curious, upbeat, relational",
    "7w8": "Curious, bold, energetic",
    "8w7": "Assertive, expansive, intense",
    "8w9": "Assertive, steady, protective",
    "9w8": "Calm, grounded, quietly strong",
    "9w1": "Calm, principled, harmonious"
  };

  return wingNames[`${primary}w${wing}`] || "Secondary style influence";
}

function downloadStoryCard() {
  const link = document.createElement("a");
  link.href = storyCard.toDataURL("image/png");
  link.download = `${resultType.textContent.toLowerCase().replaceAll(" ", "-").replace("/", "-")}-enneagram-story.png`;
  link.click();
}

async function shareStoryCard(title) {
  const blob = await new Promise((resolve) => storyCard.toBlob(resolve, "image/png"));
  const file = new File([blob], "enneagram-story.png", { type: "image/png" });
  const text = `${resultType.textContent} - ${resultTitle.textContent}\nCoba tesnya di ${pageUrl}`;

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({ title, text, files: [file] });
    return true;
  }

  return false;
}

async function shareToInstagram() {
  if (!(await shareStoryCard("Share ke Instagram"))) {
    downloadStoryCard();
  }
}

function shareToFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function shareToWhatsApp() {
  const text = `${resultType.textContent} - ${resultTitle.textContent}\nCoba tes Enneagram ini: ${pageUrl}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}
