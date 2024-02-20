        // Mengambil data JSON dari server atau file lokal
        const data = {
            "bos": {
                "title": "Battle Of Surabaya",
                                "terjemah": "Pertempuran Surabaya",
                "rating": "6.4",
                "studio": "MSV Pictures",
                "rilis": "20 Agustus 2015",
                "gendre1": "Action",
                "gendre2": "Historicial",
                "gendre3": "Drama",
                "description": "menceritakan tentang petualangan Musa. Ia adalah Seorang remaja yang bekerja sebagai tukang semir sepatu yang menjadi kurir bagi perjuangan arek-arek Suroboyo pada pertempuran 10 November 1945.<br><br> Cerita diawali dengan visualisasi dahsyat dari pengeboman kota Hiroshima oleh Sekutu yang menandakan menyerahnya Jepang. <br><br>“Indonesia merdeka, itu yang kudengar di RRI, Jepang menyerah!”, kata Musa. Tetapi langit Surabaya kembali merah dengan peristiwa Insiden Bendera dan kedatangan Sekutu yang ditumpangi oleh Belanda.",
                "bgimg": "https://upload.wikimedia.org/wikipedia/id/thumb/a/af/Battle_of_Surabaya.jpeg/444px-Battle_of_Surabaya.jpeg"

                
            },
            "boboiboythemovie": {
                "title": "Boboiboy The Movie",
            "terjemah": "Boboiboy The Movie",
                "rating": "4.8",
                "studio": "Monsta",
                "gendre1": "Action",
                "gendre2": "Komedi",
                "gendre3": "Adventure",
                "rilis": "3 Maret 2016",
                "description": "Ochobot, si robot teman BoBoiBoy, telah diculik oleh sebuah komplotan pemburu harta karun asing berjulukan The Tengkotak, dan akan mereka gunakan untuk melacak lokasi Sfera Kuasa kuno yang bersembunyi di Bumi.",
                "bgimg": "https://upload.wikimedia.org/wikipedia/id/2/2f/Boboiboy_The_Movies.jpg"
                
            },

            "upinipinkerissiamangtunggal": {
                "title": "Upin & Ipin Keris Siamang Tunggal",
            "terjemah": "Upin & Ipin",
                "rating": "7.3",
                "gendre1": "Komedi",
                "gendre2": "Animasi",
                "gendre3": "Adventure",
                "studio": "Les' Copaque Production",
                "rilis": "9 Mei 2019",
                "description": "Upin & Ipin: Keris Siamang Tunggal adalah film petualangan dan fantasi terbaru dari Upin & Ipin dan keenam sahabatnya: Ehsan, Fizi, Mail, Jarjit, Mei Mei, dan Susanti dalam menyelamatkan kerajaan fantasi Inderaloka dari ancaman musuhnya, Raja Bersiong yang jahat. Cerita bermula saat Upin, Ipin, dan para sahabatnya tak sengaja menemukan keris mistis di gudang Tok Dalang yang ternyata membuka portal menuju kerajaan Inderaloka.",
                "bgimg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OHumwVLkKLp5EI05xP20NbZJKDmhFAiUsQ&usqp=CAU"
                
            },
            "onepiecemv14": {
                "title": "One Piece Movie 14",
                "terjemah": "One Piece",
                "rating": "8.3",
                "studio": "Toei Animation",
                "rilis": "",
                "gendre1": "Action",
                "gendre2": "Adventure",
                "gendre3": "Fantasy",
                "description": "Eksposisi perompak terhebat di dunia, oleh para perompak, untuk para perompak – Festival Perompak. Luffy dan kru Topi Jerami lainnya menerima undangan dari tuan rumahnya Buena Festa yang dikenal sebagai Master of Festivities. Mereka tiba untuk menemukan tempat yang penuh dengan paviliun glamor dan banyak perompak termasuk yang dari Generasi Terburuk. Tempatnya listrik.",
                "bgimg": "https://nimegami.id/wp-content/uploads/2020/02/images-2020-02-22T112315.305.jpeg"

                
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
const gendre1Element = document.getElementById("g1");
const gendre2Element = document.getElementById("g2");
const gendre3Element = document.getElementById("g3");



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
gendre1Element.innerHTML = data[animation].gendre1;
gendre2Element.innerHTML = data[animation].gendre2;
gendre3Element.innerHTML = data[animation].gendre3;
            watchButton.addEventListener("click", function() {
                window.location.href = "video_testing.html?animation=" + animation;
            });
        }
        
        