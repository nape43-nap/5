// song-list.js
// ここに曲のファイル名を順番に追加していくだけでOKです！
const songFiles = [
    'assets/charts/1.js',
    'assets/charts/2.js',
    'assets/charts/3.js',
    // 'assets/charts/4.js', ← 新曲はここに追加
];

// HTML側で事前に読み込まれている曲データ（songData_1, songData_2 など）を
// 自動でかき集めてゲームの曲リスト（songs配列）を作ります
const songs = [];

for (const key of Object.keys(window)) {
    if (key.startsWith('songData_') && window[key] && typeof window[key] === 'object') {
        if (!songs.includes(window[key])) {
            songs.push(window[key]);
        }
    }
}

// もしすでに画面の描画関数があれば再描画する
if (typeof renderSongSelector === 'function') {
    renderSongSelector(false);
}
