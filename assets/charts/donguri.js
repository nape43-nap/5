// どんぐりころころ 試験用譜面データ（弧を描くスライド対応）
window.song_donguri = {
    id: 'donguri',
    title: 'どんぐりころころ (テスト用)',
    artist: '文部省唱歌 (Test Chart)',
    jacket: '🌰',
    audioSrc: 'assets/audio/donguri.mp3', // 音源がある場合はパスを指定
    duration: 18.0, // 曲の長さ（秒）
    chart: [
        // 1. タップ (lane: 0~4)
        { time: 2.0, lane: 0, type: 'tap' },
        { time: 3.0, lane: 4, type: 'tap' },
        
        // 2. ホールド（長押し）
        { time: 5.0, lane: 1, type: 'long', duration: 2.0 },
        
        // 3. フリック (◆マーク)
        { time: 8.5, lane: 3, type: 'flick' },
        
        // 4. スライド（弧を描く黄色い帯）
        { 
            time: 11.0, 
            lane: 1, 
            type: 'slidenode', 
            path: [1, 2, 3], // レーン1から2を通って3へ弧を描く
            pathTime: 1.5, 
            direction: 'right' 
        },
        
        // 5. 仕上げの同時押しなど
        { time: 15.0, lane: 0, type: 'tap' },
        { time: 15.0, lane: 4, type: 'tap' }
    ]
};
