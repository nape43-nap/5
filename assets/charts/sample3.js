window.songData_sample3 = {
    id: "sample3",
    title: "黄色ノーツのおためし",
    artist: "リズムゲーム作者",
    jacket: "🌟",
    audioSrc: "assets/audio/1.mp3",
    duration: 20,
    chart: [
        { time: 2.0, lane: 0, type: "tap", duration: 0, noteName: "C3" },
        { time: 3.5, lane: 4, type: "tap", duration: 0, noteName: "G3" },
        
        // --- ここから黄色ノーツ（横帯）が登場 ---
        { time: 5.0, lane: 1, type: "yellow_band", duration: 1.5, noteName: "C5" },
        { time: 7.5, lane: 3, type: "yellow_band", duration: 1.5, noteName: "C5" },
        
        // --- タップやロングとのミックス ---
        { time: 10.0, lane: 2, type: "long", duration: 1.0, noteName: "C3" },
        { time: 12.5, lane: 0, type: "yellow_band", duration: 2.0, noteName: "C5" },
        { time: 12.5, lane: 4, type: "yellow_band", duration: 2.0, noteName: "C5" },
        
        { time: 16.0, lane: 2, type: "flick", duration: 0, noteName: "C4" }
    ]
};
