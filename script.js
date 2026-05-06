const questions = [
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

const state = {
  index: 0,
  answers: []
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

document.querySelector("#start-button").addEventListener("click", startQuiz);
document.querySelector("#reset-button").addEventListener("click", resetQuiz);
document.querySelector("#retake-button").addEventListener("click", resetQuiz);
document.querySelector("#copy-button").addEventListener("click", copyResult);
backButton.addEventListener("click", goBack);

scaleButtons.forEach((button) => {
  button.addEventListener("click", () => answerQuestion(Number(button.dataset.score)));
});

function startQuiz() {
  introView.classList.add("hidden");
  resultView.classList.add("hidden");
  quizView.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const [type, text] = questions[state.index];
  const currentAnswer = state.answers[state.index];

  questionText.textContent = text;
  questionKicker.textContent = "Nilai 1-5";
  progressType.textContent = `Type ${type}`;
  progressCount.textContent = `${state.index + 1}/${questions.length}`;
  progressFill.style.width = `${(state.index / questions.length) * 100}%`;
  answeredCount.textContent = state.answers.length ? `${state.answers.length} jawaban tersimpan` : "Belum ada jawaban";
  backButton.disabled = state.index === 0;

  scaleButtons.forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.score) === currentAnswer);
  });
}

function answerQuestion(score) {
  state.answers[state.index] = score;

  if (state.index === questions.length - 1) {
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
  quizView.classList.add("hidden");
  resultView.classList.add("hidden");
  introView.classList.remove("hidden");
}

function calculateScores() {
  const scores = Object.fromEntries(Array.from({ length: 9 }, (_, index) => [index + 1, 0]));

  questions.forEach(([type], index) => {
    scores[type] += state.answers[index] || 0;
  });

  return scores;
}

function showResult() {
  const scores = calculateScores();
  const sorted = Object.entries(scores)
    .map(([type, score]) => ({ type: Number(type), score }))
    .sort((a, b) => b.score - a.score || a.type - b.type);
  const primary = sorted[0].type;
  const wing = getWing(primary, scores);
  const [title, description] = typeInfo[primary];

  quizView.classList.add("hidden");
  resultView.classList.remove("hidden");
  resultType.textContent = `Type ${primary}`;
  resultTitle.textContent = title;
  resultDescription.textContent = description;
  resultWing.textContent = `Kemungkinan wing: ${primary}w${wing}. Wing dipilih dari tipe tetangga dengan skor tertinggi.`;
  renderChart(scores);
}

function getWing(primary, scores) {
  const [left, right] = wings[primary];
  return scores[left] >= scores[right] ? left : right;
}

function renderChart(scores) {
  const max = Math.max(...Object.values(scores));
  scoreChart.innerHTML = "";

  Object.entries(scores).forEach(([type, score]) => {
    const percent = max ? Math.round((score / max) * 100) : 0;
    const [title] = typeInfo[type];
    const row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML = `
      <div class="bar-label">
        <span>Type ${type} ${title}</span>
        <span>${score}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${percent}%"></div>
      </div>
    `;
    scoreChart.appendChild(row);
  });
}

async function copyResult() {
  const text = `${resultType.textContent} - ${resultTitle.textContent}\n${resultDescription.textContent}\n${resultWing.textContent}`;
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
