/* =====================================================
   Wedding Profile Book — script.js
   ===================================================== */

/* -----------------------------------------------------
   公開時刻制限の設定
   ▼ 公開したい日時を変更する場合はここを編集
   ----------------------------------------------------- */
const UNLOCK_TIME = new Date('2026-05-06T16:00:00+09:00'); 

/* 公開時刻制限があるタブID */
const LOCKED_TABS = ['links'];

/* =====================================================
   Today's Music — 曲データ
   =======================================================
   ▼▼▼ 曲名・アーティストをここに入力してください ▼▼▼

   書き方：
     {
       scene: "シーン名",
       icon: "絵文字",
       songs: [
         { title: "曲名", artist: "アーティスト名", reason: "選んだ理由をここに書く" },
         { title: "曲名2", artist: "アーティスト名2" },  // reason がない曲はタップしても何も起きない
       ]
     },
   ======================================================= */
/* =====================================================
   プレイリストリンク
   =======================================================
   ▼▼▼ Apple Music・Spotify の URL をここに入力 ▼▼▼
   不要なサービスは url を "#" のままにしてください
   ======================================================= */
const PLAYLIST_LINKS = [
  { service: 'Apple Music', icon: '🎵', color: '#fc3c44', url: 'https://music.apple.com/jp/playlist/2026-5-16-keisuke-yui-wedding-partys-music/pl.u-NpXmzkgFmp1xe5d' },
  { service: 'Spotify',     icon: '🎧', color: '#1db954', url: 'https://open.spotify.com/playlist/78SOdE2PiGupIiAKPvFLId?si=lrNFEhxHRZ2q4hU8xsZprw&pi=jgh1MZa-R0q-5' },
];

const PLAYLIST = [
  { scene: "オープニング/入場",         icon: "🎵", songs: [
    { title: "晴る", artist: "ヨルシカ", reason: "ここに理由を書いてください" },
  ]},
  { scene: "ウェルカムスピーチ",         icon: "🎤", songs: [
    { title: "きときと -四本足の踊り", artist: "高木正勝", reason: "ここに理由を書いてください" },
  ]},
  { scene: "乾杯",         icon: "🥂", songs: [
    { title: "ココロの地図", artist: "BoyStyle", reason: "ここに理由を書いてください" },
  ]},
  { scene: "プロフィールムービー",         icon: "ℹ️", songs: [
    { title: "心絵", artist: "ロードオブメジャー", reason: "ここに理由を書いてください" },
  ]},
  { scene: "歓談",         icon: "🎶", songs: [
    { title: "虹", artist: "Aqua Timez", reason: "ここに理由を書いてください" },
    { title: "Aoi", artist: "サカナクション", reason: "ここに理由を書いてください" },
    { title: "以心伝心", artist: "ORANGE RANGE", reason: "ここに理由を書いてください" },
    { title: "アーケード", artist: "カネコアヤノ", reason: "ここに理由を書いてください" },
    { title: "風神", artist: "Vaundy", reason: "ここに理由を書いてください" },
    { title: "君と歩いた帰り道", artist: "ちくわしなちくちくわ", reason: "ここに理由を書いてください" },
    { title: "Blue Jeans", artist: "HANA", reason: "ここに理由を書いてください" },
    { title: "ソラニン", artist: "ASIAN KUNG-FU GENERATION", reason: "ここに理由を書いてください" },
    { title: "PIKA☆☆NCHI DOUBLE", artist: "嵐", reason: "ここに理由を書いてください" },
    { title: "餃子", artist: "TOMOO", reason: "ここに理由を書いてください" },
    { title: "口約束", artist: "乃木坂46", reason: "ここに理由を書いてください" },
  ]},
  { scene: "インタビュー", icon: "🎤", songs: [
    { title: "ヒーロー", artist: "FUNKY MONKEY BABYS", reason: "ここに理由を書いてください" },
  ]},
  { scene: "結婚証明書",   icon: "💍", songs: [
    { title: "Masterpiece", artist: "KOTORI", reason: "ここに理由を書いてください" },
    { title: "ヒカレ", artist: "ゆず", reason: "ここに理由を書いてください" },
    { title: "ヒカリヘ", artist: "miwa", reason: "ここに理由を書いてください" },
    { title: "交感神経優位", artist: "乃木坂46", reason: "ここに理由を書いてください" },
    { title: "恋文〜ラブレター〜", artist: "GreeeeN", reason: "ここに理由を書いてください" },
  ]},
  { scene: "退場",         icon: "🌅", songs: [
    { title: "感謝カンゲキ雨嵐", artist: "嵐", reason: "ここに理由を書いてください" },
    { title: "BOY MEETS GIRL", artist: "TRF", reason: "ここに理由を書いてください" },
    { title: "君って", artist: "西野カナ", reason: "ここに理由を書いてください" },
    { title: "マイガール", artist: "嵐", reason: "ここに理由を書いてください" },
  ]},
];

/* 理由の開閉 */
function toggleReason(wrap) {
  wrap.classList.toggle('open');
}

/* 曲カードを描画 */
function renderPlaylist() {
  const container = document.getElementById('musicList');
  if (!container) return;

  const cards = PLAYLIST.map(scene => `
    <div class="music-card">
      <div class="music-jacket">${scene.icon}</div>
      <div class="music-info">
        <div class="music-scene">${scene.scene}</div>
        ${scene.songs.map(s => s.reason ? `
          <div class="music-song-wrap has-reason" onclick="toggleReason(this)">
            <div class="music-song-header">
              <span>${s.title} / ${s.artist}</span>
              <span class="music-song-chevron">›</span>
            </div>
            <div class="music-song-reason">${s.reason}</div>
          </div>
        ` : `
          <div class="music-song">${s.title} / ${s.artist}</div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const activeLinks = PLAYLIST_LINKS.filter(l => l.url && l.url !== '#');
  const linkBlock = activeLinks.length ? `
    <div class="music-playlist-links">
      <div class="music-playlist-label">プレイリストを聴く</div>
      ${activeLinks.map(l => `
        <a class="music-playlist-btn" href="${l.url}" target="_blank" rel="noopener"
           style="--pl-color:${l.color}">
          <span class="music-playlist-icon">${l.icon}</span>
          <span class="music-playlist-name">${l.service}</span>
          <span class="music-playlist-arrow">›</span>
        </a>
      `).join('')}
    </div>
  ` : '';

  container.innerHTML = cards + linkBlock;
}

/* -----------------------------------------------------
   タブ切り替え
   ----------------------------------------------------- */
function showTab(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Today's Music タブ：時刻に応じて内容を切り替え
  if (id === 'links') {
    if (new Date() < UNLOCK_TIME) {
      renderLockedMessage();
    } else {
      renderPlaylist();
    }
  }
}

/* 公開前メッセージを描画 */
function renderLockedMessage() {
  const container = document.getElementById('musicList');
  if (!container) return;

  const now  = new Date();
  const diff = UNLOCK_TIME - now;
  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let timeText = '';
  if (days > 0)       timeText = `あと ${days} 日 ${hours} 時間`;
  else if (hours > 0) timeText = `あと ${hours} 時間 ${minutes} 分`;
  else                timeText = `あと ${minutes} 分`;

  container.innerHTML = `
    <div class="music-locked">
      <div class="music-locked-icon">🔒</div>
      <div class="music-locked-title">まだ公開前です</div>
      <div class="music-locked-desc">挙式当日の 14:00 以降に公開されます</div>
      <div class="music-locked-countdown">${timeText}</div>
    </div>
  `;
}

/* -----------------------------------------------------
   プロフィール切り替え（新郎 / 新婦）
   ----------------------------------------------------- */
function showProfile(who, btn) {
  document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ptoggle-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('prof-' + who).classList.add('active');
  btn.classList.add('active');
}

/* -----------------------------------------------------
   写真集セクション切り替え（二人の写真 / 新郎 / 新婦）
   ----------------------------------------------------- 
function showPhotoSection(who, btn) {
  document.querySelectorAll('.photo-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ptoggle-photo').forEach(b => b.classList.remove('active'));
  document.getElementById('photos-' + who).classList.add('active');
  btn.classList.add('active');
}
*/

/* -----------------------------------------------------
   メッセージ検索実行
   ※ ゲスト名・メッセージの追加は messages.js で行う
   ----------------------------------------------------- */
function searchMessage() {
  const raw      = document.getElementById('msgInput').value.trim();
  const result   = document.getElementById('msgResult');
  const notfound = document.getElementById('msgNotFound');

  result.classList.remove('show');
  notfound.classList.remove('show');
  if (!raw) return;

  // スペース（全角・半角）を除去して完全一致で比較
  const normalize = s => s.replace(/[\s　]+/g, '');
  const query = normalize(raw);

  let found = null, foundName = null;

  for (const [name, data] of Object.entries(MESSAGES)) {
    if (normalize(name) === query) { found = data; foundName = name; break; }
  }

  if (found) {
    document.getElementById('msgResultName').textContent = foundName + ' 様';
    document.getElementById('msgResultBody').innerHTML   = found.message.replace(/\n/g, '<br>');
    document.getElementById('msgResultSign').textContent = found.from;
    result.classList.add('show');
    setTimeout(() => result.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
  } else {
    notfound.classList.add('show');
  }
}

/* スプラッシュスクリーン：フェードイン → 2.5秒表示 → 2秒でフェードアウト */
(function () {
  const splash = document.getElementById('splash');
  if (!splash) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => splash.classList.add('fade-in'));
  });
  setTimeout(() => {
    splash.classList.remove('fade-in');
    splash.classList.add('fade-out');
    setTimeout(() => splash.classList.add('hidden'), 2000);
  }, 2500);
})();

/* Enter キーで検索 */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('msgInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') searchMessage();
  });
  /* 謎解きタブ初期表示 */
  initQuiz();
});

