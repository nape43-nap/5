// song-list.js
// 追加したい曲のファイル名をここに書き足していくだけでOKです
const songFiles = [
    'assets/charts/1.js',
    'assets/charts/2.js',
    'assets/charts/3.js',
    // 'assets/charts/4.js', ← 新しく曲を増やすときはここにファイルパスを追加するだけ！
];

const songs = [];

// 指定されたファイルを動的に非同期で読み込み、完了したら曲リストを初期化する
async function loadAllSongs() {
    for (const file of songFiles) {
        await new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = file;
            script.onload = () => {
                // 読み込み成功したら、現在グローバルに展開されたはずの変数（songData_Xなど）を探して追加
                // （最後に読み込まれた、または定義されたオブジェクトを自動で拾う仕組み）
                resolve();
            };
            script.onerror = () => {
                console.warn(`譜面ファイルの読み込みに失敗しました: ${file}`);
                resolve();
            };
            document.head.appendChild(script);
        });
    }

    // ウィンドウ上に展開された songData_ や、オブジェクト内に格納された曲データをかき集める
    // 各個別のJSがどのような形式で定義されていても自動で配列化します
    for (const key of Object.keys(window)) {
        if (key.startsWith('songData_') && window[key] && typeof window[key] === 'object') {
            if (!songs.includes(window[key])) {
                songs.push(window[key]);
            }
        }
    }

    // もしすでにゲームの曲選択画面の描画関数が定義されていれば、再描画を走らせる
    if (typeof renderSongSelector === 'function') {
        renderSongSelector(false);
    }
}

// 読み込み実行
loadAllSongs();
