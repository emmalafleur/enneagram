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
  1: ["The Reformer", "Tipe 1 biasanya digerakkan oleh dorongan untuk hidup benar, bertanggung jawab, dan memperbaiki hal yang belum sesuai standar. Kamu cenderung peka terhadap detail yang keliru, punya kompas moral kuat, dan ingin hasil kerja terasa bersih serta bisa dipertanggungjawabkan."],
  2: ["The Helper", "Tipe 2 biasanya digerakkan oleh kebutuhan untuk terhubung lewat perhatian, dukungan, dan rasa dibutuhkan. Kamu mudah membaca kebutuhan orang, cepat memberi bantuan, dan sering menjadi orang yang membuat relasi terasa hangat serta personal."],
  3: ["The Achiever", "Tipe 3 biasanya digerakkan oleh pencapaian, efektivitas, dan keinginan terlihat kompeten. Kamu cepat menangkap ekspektasi, bisa menyesuaikan gaya untuk mencapai hasil, dan punya energi kuat untuk membuat sesuatu terlihat berhasil."],
  4: ["The Individualist", "Tipe 4 biasanya digerakkan oleh pencarian identitas, kedalaman emosi, dan keaslian. Kamu peka pada nuansa yang tidak selalu terlihat orang lain, punya imajinasi kuat, dan ingin hidup terasa personal, bermakna, bukan sekadar biasa."],
  5: ["The Investigator", "Tipe 5 biasanya digerakkan oleh kebutuhan memahami, menjaga kapasitas, dan punya ruang mental yang cukup. Kamu kuat dalam observasi, analisis, dan membangun pemahaman sebelum bergerak, terutama saat situasi terasa kompleks atau menuntut."],
  6: ["The Loyalist", "Tipe 6 biasanya digerakkan oleh keamanan, kepercayaan, dan kesiapan menghadapi risiko. Kamu peka terhadap kemungkinan masalah, loyal pada orang atau sistem yang terbukti, dan sering menjadi orang yang menjaga kelompok tetap realistis."],
  7: ["The Enthusiast", "Tipe 7 biasanya digerakkan oleh kebebasan, pilihan, dan pengalaman yang membuat hidup terasa terbuka. Kamu cepat melihat kemungkinan baru, membawa energi ringan ke situasi berat, dan suka mencari jalan keluar yang kreatif saat suasana terasa sempit."],
  8: ["The Challenger", "Tipe 8 biasanya digerakkan oleh kemandirian, kekuatan, dan keinginan melindungi diri maupun orang yang dianggap penting. Kamu cenderung lugas, berani menghadapi konflik, dan cepat mengambil posisi saat sesuatu terasa tidak adil atau terlalu lemah."],
  9: ["The Peacemaker", "Tipe 9 biasanya digerakkan oleh harmoni, kestabilan, dan rasa terhubung. Kamu mudah melihat banyak sisi, menenangkan suasana, dan sering menjadi jembatan ketika orang lain terlalu keras mempertahankan posisinya."]
};

const typeDetails = {
  1: {
    focus: "Fokus perhatianmu sering tertuju pada apa yang bisa diperbaiki, dirapikan, atau dibuat lebih benar.",
    strength: "Kekuatan utama: integritas, disiplin, rasa tanggung jawab, dan kemampuan menjaga standar.",
    blind: "Blind spot: terlalu keras pada diri sendiri atau orang lain saat realitas tidak sesuai ideal.",
    growth: "Growth cue: izinkan proses menjadi cukup baik dulu sebelum mengejar sempurna."
  },
  2: {
    focus: "Fokus perhatianmu sering tertuju pada kebutuhan emosional orang lain dan kualitas kedekatan dalam relasi.",
    strength: "Kekuatan utama: empati, kehangatan, dukungan praktis, dan kemampuan membuat orang merasa dilihat.",
    blind: "Blind spot: sulit mengakui kebutuhan sendiri karena terlalu sibuk menjadi penting bagi orang lain.",
    growth: "Growth cue: bantu tanpa kehilangan batas, dan latih meminta secara langsung."
  },
  3: {
    focus: "Fokus perhatianmu sering tertuju pada target, impresi, performa, dan ukuran keberhasilan yang jelas.",
    strength: "Kekuatan utama: adaptif, efisien, ambisi sehat, dan kemampuan mengubah ide menjadi hasil.",
    blind: "Blind spot: mengira nilai diri hanya aman saat produktif, berhasil, atau dikagumi.",
    growth: "Growth cue: bedakan pencapaian yang terlihat bagus dari hal yang benar-benar kamu inginkan."
  },
  4: {
    focus: "Fokus perhatianmu sering tertuju pada identitas, makna personal, rasa kehilangan, dan apa yang terasa autentik.",
    strength: "Kekuatan utama: kedalaman emosi, kreativitas, kejujuran batin, dan selera yang kuat.",
    blind: "Blind spot: terlalu lama tinggal di perasaan kurang, berbeda, atau tidak dimengerti.",
    growth: "Growth cue: jadikan emosi sebagai informasi, bukan satu-satunya realitas."
  },
  5: {
    focus: "Fokus perhatianmu sering tertuju pada informasi, batas energi, privasi, dan pemahaman yang presisi.",
    strength: "Kekuatan utama: objektivitas, observasi tajam, kemandirian berpikir, dan kedalaman analisis.",
    blind: "Blind spot: menunda hidup sampai merasa cukup siap atau cukup tahu.",
    growth: "Growth cue: terlibat sedikit lebih awal, bahkan saat belum semua variabel jelas."
  },
  6: {
    focus: "Fokus perhatianmu sering tertuju pada kepercayaan, stabilitas, tanda bahaya, dan siapa yang bisa diandalkan.",
    strength: "Kekuatan utama: loyalitas, kesiapan, keberanian realistis, dan kemampuan membaca risiko.",
    blind: "Blind spot: pikiran bisa terus mencari skenario buruk sampai sulit percaya pada keputusan sendiri.",
    growth: "Growth cue: gunakan kewaspadaan sebagai alat, bukan tempat tinggal."
  },
  7: {
    focus: "Fokus perhatianmu sering tertuju pada pilihan, peluang baru, dan cara menjaga hidup tetap bergerak.",
    strength: "Kekuatan utama: optimisme, ide cepat, spontanitas, dan kemampuan membuka suasana.",
    blind: "Blind spot: menghindari rasa sakit atau kebosanan dengan terus mengejar opsi berikutnya.",
    growth: "Growth cue: bertahan sedikit lebih lama pada satu hal bisa membuat kebebasanmu lebih dalam."
  },
  8: {
    focus: "Fokus perhatianmu sering tertuju pada kekuatan, kontrol diri, keadilan, dan siapa yang perlu dilindungi.",
    strength: "Kekuatan utama: keberanian, ketegasan, proteksi, dan energi untuk menghadapi hal sulit.",
    blind: "Blind spot: terlihat kuat terus bisa membuat sisi lembutmu sulit dijangkau orang lain.",
    growth: "Growth cue: kerentanan yang dipilih sadar bukan kelemahan, tapi bentuk kontrol yang lebih dewasa."
  },
  9: {
    focus: "Fokus perhatianmu sering tertuju pada ketenangan, kenyamanan bersama, dan menghindari gesekan yang tidak perlu.",
    strength: "Kekuatan utama: penerimaan, stabilitas, kesabaran, dan kemampuan menyatukan perspektif.",
    blind: "Blind spot: terlalu lama menunda sikap pribadi agar suasana tetap aman.",
    growth: "Growth cue: suaramu tetap penting meski tidak semua orang langsung sepakat."
  }
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
const resultDetails = document.querySelector("#result-details");
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

applyTheme(localStorage.getItem("theme") || "dark");

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
  renderResultDetails(primary);
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

function renderResultDetails(primary) {
  const details = typeDetails[primary];
  resultDetails.innerHTML = "";

  Object.entries(details).forEach(([key, text]) => {
    const item = document.createElement("p");
    item.className = "detail-item";
    item.textContent = text;
    resultDetails.appendChild(item);
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

  drawStorySection(ctx, {
    y: 250,
    label: "CORE TYPE",
    main: `type ${primary}`,
    sub: title,
    accent
  });

  drawStoryDivider(ctx, 640);

  drawStorySection(ctx, {
    y: 720,
    label: "WING",
    main: `${primary}w${wing}`,
    sub: getWingLabel(primary, wing),
    accent
  });

  drawStoryDivider(ctx, 1090);

  drawStorySection(ctx, {
    y: 1170,
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
  gradient.addColorStop(0, "#07101f");
  gradient.addColorStop(0.55, "#0d1a2d");
  gradient.addColorStop(1, "#050a14");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1080, 1920);

  ctx.globalAlpha = 0.14;
  ctx.fillStyle = "#4e7cc7";
  ctx.beginPath();
  ctx.arc(875, 290, 270, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = accent;
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
  ctx.textAlign = "center";
  ctx.fillStyle = section.accent;
  ctx.font = "800 30px Segoe UI, Arial, sans-serif";
  ctx.fillText(section.label, 540, section.y);

  ctx.fillStyle = "#f7f2e8";
  ctx.font = "900 132px Segoe UI, Arial, sans-serif";
  ctx.fillText(section.main, 540, section.y + 172);

  ctx.fillStyle = "rgba(247, 242, 232, 0.68)";
  ctx.font = "500 40px Segoe UI, Arial, sans-serif";
  wrapCanvasText(ctx, section.sub, 540, section.y + 294, 780, 54, "center");
  ctx.textAlign = "left";
}

function drawStoryDivider(ctx, y) {
  ctx.strokeStyle = "rgba(234, 229, 220, 0.16)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(148, y);
  ctx.lineTo(932, y);
  ctx.stroke();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, align = "left") {
  const words = text.split(" ");
  let line = "";
  ctx.textAlign = align;

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
  ctx.textAlign = "left";
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
