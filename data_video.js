        // Mengambil data JSON dari server atau file lokal
        const data = {
            "bos": {
                "title": "Battle Of Surabaya",
                                "terjemah": "Pertempuran Surabaya",
                "rating": "6.4",
                "studio": "MSV Pictures",
                "rilis": "20 Agustus 2015",
                "description": "menceritakan tentang petualangan Musa. Ia adalah Seorang remaja yang bekerja sebagai tukang semir sepatu yang menjadi kurir bagi perjuangan arek-arek Suroboyo pada pertempuran 10 November 1945.<br><br> Cerita diawali dengan visualisasi dahsyat dari pengeboman kota Hiroshima oleh Sekutu yang menandakan menyerahnya Jepang. <br><br>“Indonesia merdeka, itu yang kudengar di RRI, Jepang menyerah!”, kata Musa. Tetapi langit Surabaya kembali merah dengan peristiwa Insiden Bendera dan kedatangan Sekutu yang ditumpangi oleh Belanda.",
                "bgimg": "https://upload.wikimedia.org/wikipedia/id/thumb/a/af/Battle_of_Surabaya.jpeg/444px-Battle_of_Surabaya.jpeg"

                
            },
            "boboiboythemovie": {
                "title": "Boboiboy The Movie",
            "terjemah": "Boboiboy The Movie",
                "rating": "4.8",
                "studio": "Monsta",
                "rilis": "3 Maret 2016",
                "description": "Ochobot, si robot teman BoBoiBoy, telah diculik oleh sebuah komplotan pemburu harta karun asing berjulukan The Tengkotak, dan akan mereka gunakan untuk melacak lokasi Sfera Kuasa kuno yang bersembunyi di Bumi.",
                "bgimg": "https://upload.wikimedia.org/wikipedia/id/2/2f/Boboiboy_The_Movies.jpg"
                
            },









































        };

        // Mendapatkan parameter dari URL untuk menentukan animasi yang dipilih
        const urlParams = new URLSearchParams(window.location.search);
        const animation = urlParams.get("animation");

        // Mengatur konten detail animasi berdasarkan animasi yang dipilih
        if (animation && data.hasOwnProperty(animation)) {
            const detailContainer = document.getElementById("detailContainer");
            const titleElement = document.getElementById("title");
            const terjemahElement = document.getElementById("terjemah");
            const rilisElement = document.getElementById("rilis");
            const ratingElement = document.getElementById("rating");
            const studioElement = document.getElementById("studio");
            const imgElement = document.getElementById("bgimg");
            
            const descriptionElement = document.getElementById("description");
            const watchButton = document.getElementById("watchButton");

            titleElement.textContent = data[animation].title;
            imgElement.src = data[animation].bgimg;
                        rilisElement.textContent = data[animation].rilis;
            ratingElement.textContent = data[animation].rating;
            studioElement.textContent = data[animation].studio;
            terjemahElement.textContent = data[animation].terjemah;
            descriptionElement.innerHTML = data[animation].description;
            

            
            watchButton.addEventListener("click", function() {
                window.location.href = "video_testing.html?animation=" + animation;
            });
        }
        
        