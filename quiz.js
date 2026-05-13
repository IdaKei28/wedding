/* =====================================================
   謎解きクイズ — 問題データ
   =======================================================
   ▼▼▼ 問題・答えをカスタマイズする場合はここを編集 ▼▼▼
   ======================================================= */
const QUIZ = [
  {
    no: 1,
    question: 'まずは佑衣ちゃんの行きたいところをリサーチ！\n佑衣ちゃん 旅行でいきたいところはある？\n\n「たくさんあるってこの前言ったでしょ！」\n\n（やべ…そうだっけ…）\n\n「しょうがないなあ、\nこれを解けば私の行きたい都道府県がわかるよ！」',
    image: '謎1.jpg',
    hint: 'イラストは「たぬき」「毛蟹」「ナイフ」「うがい」です',
    hint2: '文章になった時、情報はどこかになかったかな',
    answer: ['北海道', 'ほっかいどう'],
    explanation: 'わかった！\nたぬきは「た」を抜く\n毛蟹は「け」を「に」に変える\nナイフは「ふ」がないってこと\nうがいは「う」を「い」に変えるってことか\nそうすると「にいのこなんのせいちがせいかい」となる\n僕のコナンの映画ランキングは100万ドルの五稜星だから\n正解は北海道だね！\n\n「正解！北海道はまだ行ったことないから行ってみたいの！」'
  },
  {
    no: 2,
    question: '北海道って言っても広いけど\n行きたいところってあるの？\n\n「さすがイダ君。\nちゃんと聞いてくれるのね！」\n\n「じゃあ次の問題！',
    image: '謎2.jpg',
    hint: '新郎の情報はどこかに色々なところにのってるよ',
    hint2: '部活の情報はない、、ムービーだったり写真で確認できないかな？',
    answer: ['小樽', 'おたる'],
    explanation: 'これは自分の好きな食べ物と、部活をつなげばいいから簡単だ！\n食べ物はプロフィールに書いてある「ラーメン」\n部活は「サッカー部」と「軽音部」\nどちらもプロフィールムービーだったり、Wedding Shareの写真で確認ができるね\n\nそれのみを結ぶようにすると、、、正解は「小樽」だ！\n\n「正解だよん♪」'
  },
  {
    no: 3,
    question: '「逆にイダ君は行きたいところないの？」\n\nうーん…あ、思いついた！\nじゃあ次は僕が問題を出すね！',
    image: '謎3.jpg',
    hint: 'イラストは2つの意味が当てはまるね',
    hint2: '？に入るのは単語で記号ではないよ',
    answer: ['博多', 'はかた'],
    explanation: '「答えは博多だね！」\n\n正解！一つ目のイラストが白猫と黒猫で「？ろねこ」と考えると\n？には「し」か「く」が入るね\nだから四角のイラストが描いてあるね\n同様に2つ目は秋刀魚と熊のイラスト\nだから「さん」か「く」で△が入って「△ま」\n問題のイラストは箱とタコって考えられるから？は「は」か「た」が入る\nだから正解は博多です！\n\n博多で本場の博多ラーメンが食べたい！'
  },
  {
    no: 4,
    question: '「本場の博多ラーメンは美味しいよ！\n博多も行きたいね〜　私は行ったことあるけど笑」\n\n「でもイダ君の問題は私たちのプロフィールのことなんも入ってないね」\n\nプロフィールまで入れ問題作るの難しいよ…\n佑衣ちゃん問題作るの上手い\n\nプロフィールを入れて問題作るとなると、、、\nこんな感じかな？次の問題はこれ！',
    image: '謎4.jpg',
    hint: '新郎新婦の漢字は色々なところに記載があるね',
    hint2: 'Webサイトにない情報はムービーや写真で確認できないかな？',
    answer: ['おじゃる丸', 'おじゃるまる'],
    explanation: '「私たちの正しい漢字をたどれるように線を引いて\n通った文字を読むと、ゆいちゃんの小さい頃好きなキャラは？になるね\n私の小さい頃好きだったのはおじゃる丸だ！」\n\n正解！！\nプロフィールムービーでも出たし、Wedding Shareにも写真が入ってるね！'
  },
  {
    no: 5,
    question: '「いい感じだったけど、答えが旅行も関係なくなっちゃったよ、、、」\n\nそこまで考えるのは難しいよ、、、\n旅行はもう2人が行きたい場所どっちも行くしかないね！！\n\n「やったね！\nじゃあ最後に今の気持ちを問題にするね」',
    image: '謎5.jpg',
    hint: 'イラストは3つで一つの単語を表してるよ',
    hint2: '3つの並びはどこかで見なかった？',
    answer: ['最高', 'さいこう'],
    explanation: '2人のランキングがイラストになってる！\nということは上はサイゼリヤ、下はりょこうかな\nそうすると答えは最高！！\n謎解きも綺麗に終わったね'
  }
];

/* クイズ開始前のイントロメッセージ
   ▼ 内容を自由に変更してください */
const QUIZ_INTRO_MESSAGE =
  '僕、新郎 井田啓介。\n今日は一生に一度の結婚式。\nプロポーズしてからここまで怒涛の日々\n\n' +
  'さあ今日が終わったら何をしようか…\n\n次のビックイベントは、、、\n新婚旅行…！！\n\n' +
  'と言っても、いきたいところはたくさんあるし…\n佑衣ちゃんの希望を聞いて計画しなきゃ！\n\n '+
  '僕と一緒に旅行先を決めてみませんか？\n\n最後まで時終わった人にはいいことがあるかもですよ' 

/* 全問正解後の隠しメッセージ
   ▼ 内容を自由に変更してください */
const QUIZ_CLEAR_MESSAGE =
  '無事謎解きも終わり旅行先も決まりました！\n行先は北海道の小樽、博多！\nどっちもまわらないと！\n\n' +
  'ただ佑衣ちゃんがちょっとまだ悩んでるみたい、、、\n\n' +
  '「やっぱり新郎じゃなくて新婦にしとけばよかったな、、、\nうーん、どうしようかな」\n\n' +
  'ここまで来たらなんとか佑衣ちゃんの気持ちを察したい！\n一緒にここまで解いてくれた皆さまなら佑衣ちゃんの本当の行きたいところが解けるはず！\n答えは教えてください！\n\n' +
  'あれ、ただ答える場所がないぞ、、\nどこか他に答えを入力できるところはあったかな、、、？';

/* クイズの状態 */
let quizState = { current: 0 };

/* クイズを初期化（イントロ画面を表示） */
function initQuiz() {
  quizState = { current: 0 };
  const container = document.getElementById('quizContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="quiz-start-card">
      <div class="quiz-start-icon">🔍</div>
      <div class="quiz-start-title">謎解きクイズ</div>
      <div class="quiz-start-text">${QUIZ_INTRO_MESSAGE.replace(/\n/g, '<br>')}</div>
      <button class="quiz-start-btn" onclick="startQuizQuestions()">クイズをはじめる →</button>
    </div>
  `;
}

/* クイズ問題を開始 */
function startQuizQuestions() {
  const container = document.getElementById('quizContainer');
  if (!container) return;
  container.innerHTML = '<div id="quizProgressArea"></div>';
  updateProgress();
  appendQuizQuestion(0);
}

/* プログレスバーとドットを更新 */
function updateProgress() {
  const progressEl = document.getElementById('quizProgressArea');
  if (!progressEl) return;
  const total = QUIZ.length;
  const done  = quizState.current;
  const pct   = Math.round((done / total) * 100);
  progressEl.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="quiz-progress-text">問 ${Math.min(done + 1, total)} / ${total}</div>
    </div>
    <div class="quiz-dots">
      ${QUIZ.map((_, i) => `<div class="quiz-dot ${
        i < done ? 'done' : i === done && done < total ? 'current' : ''
      }"></div>`).join('')}
    </div>
  `;
}

/* 問題カードを末尾に追加 */
function appendQuizQuestion(index) {
  const container = document.getElementById('quizContainer');
  if (!container || index >= QUIZ.length) return;

  const q  = QUIZ[index];
  const no = index + 1;

  const visualHtml = `<div class="quiz-visual-img-wrap"><img class="quiz-visual-img" src="${q.image}" alt="問題${no}の画像"></div>`;

  const wrapper = document.createElement('div');
  wrapper.id = `quizCard-${index}`;
  wrapper.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-no">問題 ${no}</div>
      <div class="quiz-question">${q.question.replace(/\n/g, '<br>')}</div>
      ${visualHtml}
      <button class="quiz-hint-btn" id="quizHintBtn1-${index}" onclick="showQuizHint(this, ${index}, 1)">💡 ヒント1を見る</button>
      <div class="quiz-hint" id="quizHint1-${index}">${q.hint}</div>
      ${q.hint2 ? `<button class="quiz-hint-btn" id="quizHintBtn2-${index}" style="display:none" onclick="showQuizHint(this, ${index}, 2)">💡 ヒント2を見る</button>
      <div class="quiz-hint" id="quizHint2-${index}">${q.hint2}</div>` : ''}
      <div class="quiz-input-row">
        <input class="quiz-input" id="quizInput-${index}" type="text"
          placeholder="ひらがなで入力" maxlength="10"
          inputmode="hiragana" autocomplete="off"
          onkeydown="if(event.key==='Enter')submitQuizAnswer(${index})">
        <button class="quiz-submit-btn" onclick="submitQuizAnswer(${index})">答える</button>
      </div>
      <div class="quiz-feedback" id="quizFeedback-${index}"></div>
    </div>
  `;

  container.appendChild(wrapper);

  setTimeout(() => {
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    const inp = document.getElementById(`quizInput-${index}`);
    if (inp) inp.focus();
  }, 300);
}

/* ヒントを表示 */
function showQuizHint(btn, index, num) {
  document.getElementById(`quizHint${num}-${index}`).classList.add('show');
  btn.style.display = 'none';
  if (num === 1) {
    const btn2 = document.getElementById(`quizHintBtn2-${index}`);
    if (btn2) btn2.style.display = '';
  }
}

/* 答えを正規化（全角→半角・カタカナ→ひらがな・スペース除去） */
function normalizeAnswer(str) {
  return str
    .trim()
    .replace(/[\s　]+/g, '')
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0))
    .replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60))
    .toLowerCase();
}

/* 答えを判定 */
function submitQuizAnswer(index) {
  const input    = document.getElementById(`quizInput-${index}`);
  const feedback = document.getElementById(`quizFeedback-${index}`);
  if (!input || !feedback) return;
  if (input.disabled) return;

  const user = normalizeAnswer(input.value);
  if (!user) return;

  const answers = [].concat(QUIZ[index].answer);
  const isCorrect = answers.some(a => normalizeAnswer(a) === user);

  feedback.className = 'quiz-feedback';
  feedback.innerHTML = '';
  input.classList.remove('quiz-shake');

  const isLast = index + 1 >= QUIZ.length;

  if (isCorrect) {
    input.disabled = true;
    feedback.innerHTML = `
      <div class="quiz-correct">
        <div class="quiz-correct-mark">⭕</div>
        <div class="quiz-correct-label">正解！</div>
        <div class="quiz-correct-exp">${QUIZ[index].explanation.replace(/\n/g, '<br>')}</div>
        <button class="quiz-next-btn" onclick="advanceQuiz(${index})">
          ${isLast ? '隠しメッセージを見る 🎉' : '次の問題へ →'}
        </button>
      </div>`;
    feedback.classList.add('show', 'correct');
  } else {
    feedback.innerHTML = `
      <div class="quiz-wrong">
        <div class="quiz-wrong-mark">❌</div>
        <div class="quiz-wrong-label">惜しい！もう一度考えてみよう</div>
      </div>`;
    feedback.classList.add('show', 'wrong');
    input.classList.add('quiz-shake');
    setTimeout(() => input.classList.remove('quiz-shake'), 500);
  }
}

/* 次の問題へ */
function advanceQuiz(index) {
  quizState.current = index + 1;

  // 正解済みカードから「次へ」ボタンを除去してすっきりさせる
  const nextBtn = document.querySelector(`#quizCard-${index} .quiz-next-btn`);
  if (nextBtn) nextBtn.remove();

  // 解答済みのスタイルをあてる
  const cardEl = document.querySelector(`#quizCard-${index} .quiz-card`);
  if (cardEl) cardEl.classList.add('quiz-card--solved');

  updateProgress();

  if (quizState.current >= QUIZ.length) {
    showQuizClear();
  } else {
    appendQuizQuestion(quizState.current);
  }
}

/* 全問正解クリア画面 */
function showQuizClear() {
  const container = document.getElementById('quizContainer');
  if (!container) return;

  const clearEl = document.createElement('div');
  clearEl.innerHTML = `
    <div class="quiz-clear">
      <div class="quiz-clear-icon">🎉</div>
      <div class="quiz-clear-title">全問正解！</div>
      <div class="quiz-clear-sub">おめでとうございます</div>
      <div class="quiz-clear-divider"><span>✦</span></div>
      <div class="quiz-clear-message">${QUIZ_CLEAR_MESSAGE.replace(/\n/g, '<br>')}</div>
      <div class="quiz-clear-sign">— 新郎・新婦より</div>
      <button class="quiz-retry-all-btn" onclick="initQuiz()">もう一度挑戦する 🔄</button>
    </div>
  `;
  container.appendChild(clearEl);

  setTimeout(() => clearEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
}
