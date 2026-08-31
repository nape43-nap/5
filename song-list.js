// song-list.js
// 今後新曲を追加するときは、このファイルを編集するだけでOKです！
const songs = [
    {
        id: 'song_1',
        title: 'どんぐりころころ',
        artist: '文部省唱歌 / 童謡',
        jacket: '🌰',
        duration: 18.0,
        chart: [
            { time: 2.0, lane: 0, type: 'tap', noteName: 'C4' },
            { time: 3.0, lane: 1, type: 'tap', noteName: 'D4' },
            { time: 4.0, lane: 2, type: 'tap', noteName: 'E4' },
            { time: 5.0, lane: 3, type: 'flick', noteName: 'F4' },
            { time: 6.0, lane: 4, type: 'tap', noteName: 'G4' },
            { time: 8.0, lane: 2, type: 'long', duration: 2.0, noteName: 'C5' },
            { time: 11.0, lane: 0, type: 'tap', noteName: 'G4' },
            { time: 12.0, lane: 1, type: 'tap', noteName: 'F4' },
            { time: 13.0, lane: 2, type: 'tap', noteName: 'E4' },
            { time: 14.0, lane: 3, type: 'tap', noteName: 'D4' },
            { time: 15.0, lane: 4, type: 'flick', noteName: 'C4' }
        ]
    },
    {
        id: 'song_2',
        title: 'メリーさんのひつじ',
        artist: 'アメリカ民謡',
        jacket: '🐑',
        duration: 16.0,
        chart: [
            { time: 2.0, lane: 2, type: 'tap' },
            { time: 2.5, lane: 1, type: 'tap' },
            { time: 3.0, lane: 0, type: 'tap' },
            { time: 3.5, lane: 1, type: 'tap' },
            { time: 4.0, lane: 2, type: 'tap' },
            { time: 4.5, lane: 2, type: 'tap' },
            { time: 5.0, lane: 2, type: 'long', duration: 1.5 }
        ]
    }
];

// ゲーム画面が表示されている状態ですぐリストに反映させるための処理
if (typeof renderSongSelector === 'function') {
    renderSongSelector(false);
}
