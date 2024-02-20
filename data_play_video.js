const data = {
            "bos": {
                "title": "Battle Of Surabaya",
"episode": "Episode 1",
                "description": "menceritakan tentang petualangan Musa. Ia adalah Seorang remaja yang bekerja sebagai tukang semir sepatu yang menjadi kurir bagi perjuangan arek-arek Suroboyo pada pertempuran 10 November 1945.<br><br> Cerita diawali dengan visualisasi dahsyat dari pengeboman kota Hiroshima oleh Sekutu yang menandakan menyerahnya Jepang. <br><br>“Indonesia merdeka, itu yang kudengar di RRI, Jepang menyerah!”, kata Musa. Tetapi langit Surabaya kembali merah dengan peristiwa Insiden Bendera dan kedatangan Sekutu yang ditumpangi oleh Belanda.",
                "videoUrl": "https://pixeldrain.com/api/file/jLXe89mP"
            },
            
            "boboiboythemovie": {
                "title": "Boboiboy The Movie",
"episode": "Episode 1",
                "description": "Ochobot, si robot teman BoBoiBoy, telah diculik oleh sebuah komplotan pemburu harta karun asing berjulukan The Tengkotak, dan akan mereka gunakan untuk melacak lokasi Sfera Kuasa kuno yang bersembunyi di Bumi.",
                "videoUrl": "https://acefile.co/player/51182839"
            },
            "upinipinkerissiamangtunggal": {
                "title": "Upin & Ipin Keris Siamang Tunggal",
"episode": "Episode 1",
                "description": "Upin & Ipin: Keris Siamang Tunggal adalah film petualangan dan fantasi terbaru dari Upin & Ipin dan keenam sahabatnya: Ehsan, Fizi, Mail, Jarjit, Mei Mei, dan Susanti dalam menyelamatkan kerajaan fantasi Inderaloka dari ancaman musuhnya, Raja Bersiong yang jahat. Cerita bermula saat Upin, Ipin, dan para sahabatnya tak sengaja menemukan keris mistis di gudang Tok Dalang yang ternyata membuka portal menuju kerajaan Inderaloka.",
                "videoUrl": "https://www.youtube.com/embed/6tmIF7RlMA4?feature=shared"
            },
            
            
            
            
            
            
            
        };

        // Mendapatkan parameter dari URL untuk menentukan animasi yang dipilih
        const urlParams = new URLSearchParams(window.location.search);
        const animation = urlParams.get("animation");

        // Mengatur video yang akan ditampilkan berdasarkan animasi yang dipilih
        if (animation && data.hasOwnProperty(animation)) {
            const videoPlayer = document.getElementById("videoPlayer");
            const videoSource = document.getElementById("videoSource");
            const titleElement = document.getElementById("title");
            const descriptionElement = document.getElementById("description");
            const videoContainer = document.getElementById("videoContainer");
              const episodeElement = document.getElementById("episode");

titleElement.innerHTML = data[animation].title;
            episodeElement.textContent = data[animation].episode;
            descriptionElement.innerHTML = data[animation].description;
const iframe = document.createElement("iframe");
            iframe.src = data[animation].videoUrl;
            iframe.width = "100%";
            iframe.height = "220";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;

            videoContainer.appendChild(iframe);
           // videoSource.src = data[animation].videoUrl;
            //videoPlayer.load();
            //videoPlayer.play();
        }